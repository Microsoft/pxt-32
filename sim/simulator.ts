/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>

namespace pxsim {
    export type CommonBoard = Board

    const paletteSrc = [
        "#000000", // black
        "#000000", // black
        "#33e2e4", // teal 
        "#05b3e0", // blue
        "#3d30ad", // violet
        "#b09eff", // light violet
        "#5df51f", // green
        "#6a8927", // dollar green
        "#65471f", // brown
        "#98294a", // bordowy
        "#f80000", // red
        "#e30ec0", // pink
        "#ff9da5", // light pink
        "#ff9005", // orange
        "#efe204", // yellow
        "#ffffff", // white
    ]
    let forcedUpdateLoop: any

    /**
     * This function gets called each time the program restarts
     */
    initCurrentRuntime = () => {
        runtime.board = new Board();

        if (!forcedUpdateLoop) {
            // this is used to force screen update if game loop is stuck or not set up properly
            forcedUpdateLoop = setInterval(() => {
                //board().screenState.maybeForceUpdate()
            }, 100)
            const body = document.getElementById("root")
            window.onfocus = () => {
                body.className = "focus"
            }
            window.onblur = () => {
                body.className = "blur"
            }
            window.onkeydown = (e) => {
                const b = board()
                if (b) b.setKey((typeof e.which == "number") ? e.which : e.keyCode, true)
            }
            window.onkeyup = (e) => {
                const b = board()
                if (b) b.setKey((typeof e.which == "number") ? e.which : e.keyCode, false)
            }
        }
    };

    /**
     * Gets the current 'board', eg. program state.
     */
    export function board(): Board {
        return runtime.board as Board;
    }

    function htmlColorToUint32(hexColor: string) {
        const ca = new Uint8ClampedArray(4)
        const ui = new Uint32Array(ca.buffer)
        const v = parseInt(hexColor.replace(/#/, ""), 16)
        ca[0] = (v >> 16) & 0xff;
        ca[1] = (v >> 8) & 0xff;
        ca[2] = (v >> 0) & 0xff;
        ca[3] = 0xff; // alpha
        // convert to uint32 using target endian
        return new Uint32Array(ca.buffer)[0]
    }

    const openMeInMakeCode = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAACBAgMAAACA` +
        `3hMIAAAACVBMVEX///+rq6sAAACQF3jzAAAAdklEQVQY05WQsQ2FMAxE3/8KDZUp2CcjMBIlYorUTIntuLA` +
        `UCcHpFRfp4kuMaqqIKGa61kpxfqgis4ghKYOzMipl+pCqfpjzcFHCfOjaUtfmXViLeLVExgIljuN70jYcyH` +
        `PUhAosRi969a920E7azHWx/zvm4QZrZxQ87RClwwAAAABJRU5ErkJggg==`

    export function loadImageAsync(url: string) {
        return new Promise<HTMLCanvasElement>((resolve, reject) => {
            const img = new Image();
            img.src = url
            img.onload = () => {
                const canvas = document.createElement("canvas")
                canvas.width = img.width
                canvas.height = img.height
                const ctx = canvas.getContext("2d")
                ctx.drawImage(img, 0, 0);
                resolve(canvas)
            };
            img.onerror = () => {
                reject(new Error("Cannot load image"))
            }
        })
    }

    /**
     * Represents the entire state of the executing program.
     * Do not store state anywhere else!
     */
    export class Board extends pxsim.BaseBoard
        implements pxsim.MusicBoard {
        public bus: EventBus;
        public audioState: AudioState;
        public canvas: HTMLCanvasElement;
        public stats: HTMLElement;
        public screen: Uint32Array;
        public startTime = Date.now()
        public screenState: ScreenState
        private lastKey = 0
        private lastScreenshot: Uint32Array
        private lastScreenshotTime = 0;

        private controls: ControlPad;

        constructor() {
            super();
            this.bus = new EventBus(runtime);
            this.screenState = new ScreenState(paletteSrc)
            this.audioState = new AudioState();
        }

        getDefaultPitchPin(): Pin {
            return undefined;
        }
        
        setKey(which: number, isPressed: boolean) {
            let k = mapKey(which)
            if (k) {
                this.handleKeyEvent(k, isPressed);
            }
        }

        handleKeyEvent(key: Key, isPressed: boolean) {
            this.lastKey = Date.now()
            this.bus.queue(isPressed ? "_keydown" : "_keyup", key)
            if (this.controls) {
                this.controls.mirrorKey(key, isPressed);
            }
        }

        public receiveMessage(msg: SimulatorMessage) {
            if (msg.type == "screenshot")
                this.screenshotAsync((msg as SimulatorScreenshotMessage).title || pxsim.title || "...")
                    .then(img => {
                        Runtime.postMessage(
                            { type: "screenshot", data: img } as SimulatorScreenshotMessage)
                    })
        }

        private screenshotAsync(title: string) {
            let w = this.screenState.width
            let h = this.screenState.height
            let work = document.createElement("canvas")
            let border = 16
            let bottom = 32
            work.width = w + border * 2
            work.height = h + border * 2 + bottom
            let ctx = work.getContext("2d")
            ctx.imageSmoothingEnabled = false
            ctx.fillStyle = 'white'
            ctx.fillRect(0, 0, work.width, work.height)
            let id = ctx.getImageData(border, border, w, h)
            if (this.lastScreenshot)
                new Uint32Array(id.data.buffer).set(this.lastScreenshot)
            else
                new Uint32Array(id.data.buffer).fill(0xff000000)
            ctx.putImageData(id, border, border)
            let lblTop = 2 * border + h + 4
            ctx.fillStyle = 'black'
            ctx.font = '13px sans-serif'
            ctx.fillText(title, border, lblTop, w)
            return loadImageAsync(openMeInMakeCode)
                .then(openme => {
                    ctx.drawImage(openme, border + w + 3, border)
                    return work.toDataURL("image/png")
                })
        }

        tryScreenshot() {
            let now = Date.now()
            // if there was a key since last screenshot and at least 100ms ago, 
            // and last screenshot was at least 3s ago, record a new one
            if (now - this.lastScreenshotTime > 3000 &&
                this.lastKey < now - 100 &&
                (!this.lastScreenshot || this.lastKey > this.lastScreenshotTime))
                this.takeScreenshot();
        }

        takeScreenshot() {
            let now = Date.now()
            this.lastScreenshot = this.screenState.screen.slice(0)
            this.lastScreenshotTime = now
        }

        initAsync(msg: pxsim.SimulatorRunMessage): Promise<void> {
            this.canvas = document.getElementById("paint-surface") as HTMLCanvasElement;
            this.stats = document.getElementById("debug-stats");
            this.stats.className = "stats"
            this.canvas.width = 16;
            this.canvas.height = 16;

            if (!this.controls) {
                const controlDiv = document.getElementById("controls");
                controlDiv.innerHTML = "";
                this.controls = new ControlPad(controlDiv);
            }

            let requested = false

            this.screenState.onChange = () => {
                this.canvas.width = this.screenState.width
                this.canvas.height = this.screenState.height

                const ctx = this.canvas.getContext("2d")
                ctx.imageSmoothingEnabled = false
                const imgdata = ctx.getImageData(0, 0, this.screenState.width, this.screenState.height)
                const arr = new Uint32Array(imgdata.data.buffer)

                let flush = () => {
                    requested = false
                    ctx.putImageData(imgdata, 0, 0)
                    this.tryScreenshot()
                }

                // after we did one-time setup, redefine ourselves to be quicker
                this.screenState.onChange = () => {
                    arr.set(this.screenState.screen)
                    if (!requested) {
                        requested = true
                        window.requestAnimationFrame(flush)
                    }
                }
                // and finally call the redefnied self
                this.screenState.onChange()
            }

            let info = document.getElementById("instructions")

            return Promise.resolve();
        }
    }
}


namespace pxsim.pxtcore {
    export function updateStats(s: string) {
        board().stats.textContent = s
    }
}
