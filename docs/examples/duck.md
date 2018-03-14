# Duck

A simple example

```blocks
game.splash("Falling Duck", "Z to jump")

const duckImg = img`
..eeee
..e.ee..ee
..eeee..ee
RRRRRR..ee
..eeeeeeee
..eeeeeeee
..eeeeeeee
....eeee
....eeee
....eeee
..RRRRRR
`

const cloudImg = img`
 . f f f . . . . . . . . . f f
 f 2 2 2 f . . f f f . . f 2 2 f
 f 2 2 2 2 f f 2 2 2 f f 2 2 2 f
 f 2 2 2 2 2 2 2 2 2 2 2 2 2 2 f
 . f f f f f f f f f f f f f f
 `.doubled()

let block = image.repeatY(20, img`
00 0f f7 77 7f f0 00
00 0f 77 77 77 f0 00
00 0f 77 77 77 f0 00
00 0f 77 77 77 f0 00
`)

let bot = img`
0f ff ff ff ff ff f0
0f 77 77 77 77 77 f0
0f 77 77 77 77 77 f0
00 ff 77 77 77 ff 00
00 0f 77 77 77 f0 00
`

let top = bot.clone()
top.flipY()

let hole = image.create(top.width(), 50)

let pimg = image.concatY([block, top, hole, bot, block])

let spread = 80
let prevObstacle: Sprite

let duck = sprites.create(duckImg)
duck.image.flipX()
duck.x = 20
duck.ay = 300

duck.onCollision(function (other: Sprite) {
    game.over()
})
duck.onHitWall(function () {
    game.over()
})

function launchObstacle() {
    prevObstacle = sprites.launchParticle(pimg, -30, 0)
    prevObstacle.y = Math.randomRange(30, 90)
    prevObstacle.onDestroy(function () {
        hud.changeScoreBy(1)
    })
}

launchObstacle()

keys.A.onPressed(function () {
    duck.vy = -100
})

game.setBackground(4)
game.frame(function () {
    if (Math.random() < 0.02) {
        let s = sprites.launchParticle(cloudImg, -45, 0)
        s.y = Math.randomRange(0, screen.height())
        s.z = -1
        s.flags |= sprites.Flag.Ghost
    }

    if (prevObstacle.x < screen.width - spread) {
        launchObstacle()
        spread = Math.randomRange(40, 90)
    }
})
```
