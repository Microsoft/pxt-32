/**
 * Tagged image literal converter
 */
//% shim=@f4 helper=image::ofBuffer blockIdentity="images._spriteImage"
//% groups=["0.","1#","2T","3t","4N","5n","6G","7g","8","9","aAR","bBP","cCp","dDO","eEY","fFW"]
function img(lits: any, ...args: any[]): Image { return null }

// set palette before creating screen, so the JS version has the right BPP
image.setPalette(hex`__palette`)
let screen = image.create(160, 120) as ScreenImage

namespace image {
    //% shim=pxt::setPalette
    export function setPalette(buf: Buffer) { }
}

namespace _screen_internal {
    //% shim=pxt::updateScreen
    function updateScreen(img: Image): void { }
    //% shim=pxt::updateStats
    function updateStats(msg: string): void { }

    control.__screen.setupUpdate(() => updateScreen(screen))
    control.EventContext.onStats = function (msg: string) {
        updateStats(msg);
    }
}
