/*
Frame handlers:
 10 - physics and collisions
 20 - loops.frame()
 60 - screen/sprite background
 90 - drawing sprites
 95 - drawing score
100 - loops.menu()
200 - screen refresh
*/

/**
 * Sprites on screen
 */
//% weight=98 color=#12592A icon="\uf111"
namespace sprites {
    export let allSprites: Sprite[]

    export function reset() {
        init()
        allSprites = []
    }

    function init() {
        if (!allSprites) {
            allSprites = []
            setBackgroundColor(0)
            control.addFrameHandler(10, () => {
                const dt = control.deltaTime;
                physics.engine.update(dt);
                for (let s of allSprites)
                    s._update(control.deltaTime);
            })
            control.addFrameHandler(60, () => { bgFunction() })
            control.addFrameHandler(90, () => {
                // stack overflow
                // allSprites.sort(function (a, b) { return a.z - b.z || a.id - b.id; })
                for (let s of allSprites)
                    s._draw()
                if (game.debug)
                    physics.engine.draw();
            })
        }
    }

    let bgFunction = () => { }

    export function setBackgroundCallback(f: () => void) {
        init()
        bgFunction = f
    }

    export function setBackgroundColor(c: number) {
        init()
        bgFunction = () => {
            screen.fill(c)
        }
    }

    /**
     * Creates a new sprite from an image
     * @param img the iamge
     */
    //% _blockId=spritescreate block="create %img"
    export function create(img: Image): Sprite {
        init()
        let spr = new Sprite(img)
        allSprites.push(spr)
        spr.id = allSprites.length
        physics.engine.addSprite(spr);
        return spr
    }

    /**
     * Creates a sprite from a sequence of images
     * @param imgs an array of images
     */
    //% _blockId=spritescreateanimation block="create animated %images"
    export function createWithAnimation(imgs: Image[]) {
        let s = create(imgs[0])
        s.animation = new SpriteAnimation(imgs)
        return s
    }

    /**
     * Create a new sprite with given speed, and place it at the edge of the screen so it moves towards the middle. 
     * The sprite auto-destroys when it leaves the screen. You can modify position after it's created.
     */
    export function launchParticle(img: Image, vx: number, vy: number) {
        let s = create(img)
        s.vx = vx
        s.vy = vy

        // put it at the edge of the screen so that it moves towards the middle

        if (vx < 0)
            s.x = screen.width + (s.width >> 1) - 1
        else if (vx > 0)
            s.x = -(s.width >> 1) + 1

        if (vy < 0)
            s.y = screen.height + (s.height >> 1) - 1
        else if (vy > 0)
            s.y = -(s.height >> 1) + 1

        s.flags |= sprites.Flag.AutoDestroy;

        return s
    }

    export enum Flag {
        Ghost = 1, // doesn't collide with other sprites
        Destroyed = 2,
        AutoDestroy = 4, // remove the sprite when no longer visible
    }
}

//%
class SpriteAnimation {
    frames: Image[]
    frameIdx: number
    time: number
    step: number

    constructor(f: Image[]) {
        this.frames = f
        this.frameIdx = 0
        this.time = 0
        this.step = 0.2
    }

    reset() {
        this.frameIdx = 0
        this.time = 0
    }

    update(parent: Sprite) {
        this.time += control.deltaTime
        let f = (this.time / this.step) | 0
        if (f != this.frameIdx) {
            if (f >= this.frames.length)
                this.reset()
            else
                this.frameIdx = f
            parent.image = this.frames[this.frameIdx]
        }
    }
}

/**
 * A state property from the sprite
 */
//%
enum SpriteSetProperty {
    //% block=x
    X,
    //% block=y
    Y,
    //% block="vx"
    VX,
    //% block="vy"
    VY,
    //% block="ax"
    AX,
    //% block="ay"
    AY    
}

/**
 * A state property from the sprite
 */
//%
enum SpriteGetProperty {
    //% block=x
    X,
    //% block=y
    Y,
    //% block="vx"
    VX,
    //% block="vy"
    VY,
    //% block="ax"
    AX,
    //% block="ay"
    AY,
    //% block=left
    Left,
    //% block=right
    Right,
    //% block=top
    Top,
    //% block=bottom
    Bottom,
    //% block=width
    Width,
    //% block=height
    Height
}

/** 
 * A sprite on screem 
 **/
//%
class Sprite {
    x: number
    y: number
    z: number
    vx: number
    vy: number
    ax: number
    ay: number
    image: Image
    flags: number
    id: number
    type: number

    animation: SpriteAnimation

    collisionHandler: (other: Sprite) => void
    private wallHandler: () => void
    private destroyHandler: () => void

    constructor(img: Image) {
        this.x = screen.width >> 1
        this.y = screen.height >> 1
        this.z = 0
        this.vx = 0
        this.vy = 0
        this.ax = 0
        this.ay = 0
        this.flags = 0
        this.image = img
        this.type = 0
    }

        /**
         * Sets a property of the sprite
         * @param property the name of the property to change
         * @param the updated value
         */
        //% blockNamespace=Sprites
        //% blockId=spritesspreiteset block="set %sprite %property to %value" blockGap=8
        public set(property: SpriteSetProperty, value: number) {
            switch (property) {
                case SpriteSetProperty.X: this.x = value; break;
                case SpriteSetProperty.Y: this.y = value; break;
                case SpriteSetProperty.VX: this.vx = value; break;
                case SpriteSetProperty.VY: this.vy = value; break;
                case SpriteSetProperty.AX: this.ax = value; break;
                case SpriteSetProperty.AY: this.ay = value; break;
            }
        }

        /**
         * Changes a property of the sprite
         * @param property the name of the property to change
         * @param value amount of change, eg: 1
         */
        //% blockNamespace=Sprites
        //% blockId=spritespsritechange block="change %sprite %property by %value" blockGap=8
        public changeBy(property: SpriteSetProperty, value: number) {
            switch (property) {
                case SpriteSetProperty.X: this.x += value; break;
                case SpriteSetProperty.Y: this.y += value; break;
                case SpriteSetProperty.VX: this.vx += value; break;
                case SpriteSetProperty.VY: this.vy += value; break;
                case SpriteSetProperty.AX: this.ax += value; break;
                case SpriteSetProperty.AY: this.ay += value; break;
            }
        }

        /**
         * Gets a property of the sprite
         * @param property the name of the property to change
         */
        //% blockNamespace=Sprites
        //% blockId=spritespspriteget block="%sprite %property"
        public get(property: SpriteGetProperty) {
            switch (property) {
                case SpriteGetProperty.X: return this.x;
                case SpriteGetProperty.Y: return this.y;
                case SpriteGetProperty.Left: return this.left;
                case SpriteGetProperty.Right: return this.right;
                case SpriteGetProperty.Top: return this.top;
                case SpriteGetProperty.Bottom: return this.bottom;
                case SpriteGetProperty.Width: return this.width;
                case SpriteGetProperty.Height: return this.height;
                case SpriteGetProperty.Y: return this.y;
                case SpriteGetProperty.VX: return this.vx;
                case SpriteGetProperty.VY: return this.vy;
                case SpriteGetProperty.AX: return this.ax;
                case SpriteGetProperty.AY: return this.ay;
                default: return 0;
            }
        }

    get width() {
        return this.image.width
    }
    get height() {
        return this.image.height
    }
    get left() {
        return this.x - (this.width >> 1)
    }
    get right() {
        return this.left + this.width
    }
    get top() {
        return this.y - (this.height >> 1)
    }
    get bottom() {
        return this.top + this.height
    }

    _draw() {
        screen.drawTransparentImage(this.image, this.left, this.top)
        if (game.debug)
            screen.drawRect(this.left, this.top, this.width, this.height, 3);
    }

    _update(dt: number) {
        if (this.animation)
            this.animation.update(this)
        if (this.flags & sprites.Flag.AutoDestroy) {
            if (this.right < 0 || this.bottom < 0 ||
                this.left > screen.width ||
                this.top > screen.height) {
                this.destroy()
            }
        }
    }

    _collisions() {
        if (this.collisionHandler) {
            for (let o of physics.engine.collides(this)) {
                let tmp = o
                control.runInBackground(() => this.collisionHandler(tmp))
            }
        }

        if (this.wallHandler) {
            if (
                0 <= this.x && this.x < screen.width &&
                0 <= this.y && this.y < screen.height) {
                // OK
            } else {
                control.runInBackground(this.wallHandler)
            }
        }

    }

    makeGhost() {
        this.flags |= sprites.Flag.Ghost
    }

    collidesWith(other: Sprite) {
        if (other == this) return false;
        if (this.flags & sprites.Flag.Ghost)
            return false
        if (other.flags & sprites.Flag.Ghost)
            return false
        return other.image.overlapsWith(this.image, this.left - other.left, this.top - other.top)
    }

    onCollision(handler: (other: Sprite) => void) {
        this.collisionHandler = handler
    }

    onHitWall(handler: () => void) {
        this.wallHandler = handler
    }

    onDestroy(handler: () => void) {
        this.destroyHandler = handler
    }

    destroy() {
        if (this.flags & sprites.Flag.Destroyed)
            return
        this.flags |= sprites.Flag.Destroyed
        sprites.allSprites.removeElement(this);
        physics.engine.removeSprite(this);
        if (this.destroyHandler) {
            control.runInBackground(this.destroyHandler)
        }
    }

    toString() {
        return `${this.id}(${this.x},${this.y})->(${this.vx},${this.vy})`;
    }
}