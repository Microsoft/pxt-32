# Create a Hero

## Introduction @unplugged

Let's make a game! First, we'll create a main character that shoots some projectiles. Maybe that's a duck that shoots bubbles, or a monkey throwing bananas, or a cat that spits hairballs--it's up to you!

![Duck bubbles](/static/recipes/01-character.gif)

## Set the scene

From ``||scene:Scene||``, drag the ``||scene:set background color||`` block into the ``||loops:on start||`` block on your workspace and select a background color for your game.

```blocks
// @highlight
scene.setBackgroundColor(8)
```

## Draw your hero

From ``||sprites:Sprites||``, drag the ``||variables:set mySprite to||`` block into ``||loops:on start|``. Click on the grey box for ``||variables:set mySprite to||`` and then select the **Gallery** view. Select your hero!

```blocks
scene.setBackgroundColor(8)
// @highlight
let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b c . . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 5 d f . .
    . . . . b 5 5 1 f f 5 d 4 c . .
    . . . . b 5 5 d f b d d 4 4 . .
    b d d d b b d 5 5 5 4 4 4 4 4 b
    b b d 5 5 5 b 5 5 4 4 4 4 4 b .
    b d c 5 5 5 5 d 5 5 5 5 5 b . .
    c d d c d 5 5 b 5 5 5 5 5 5 b .
    c b d d c c b 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Player)
```

## Control your hero

From ``||controller:Controller||``, drag the ``||controller:move mySprite with buttons||`` block **after** ``||variables:set mySprite||``. This will allow you to move your sprite around the screen. Try it out using the arrow keys on your keyboard or clicking the joystick in the simulator

```blocks
scene.setBackgroundColor(8)
let mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . .
    . . . . . . . . . b 5 b . . . .
    . . . . . . . . . b c . . . . .
    . . . . . . b b b b b b . . . .
    . . . . . b b 5 5 5 5 5 b . . .
    . . . . b b 5 d 1 f 5 5 d f . .
    . . . . b 5 5 1 f f 5 d 4 c . .
    . . . . b 5 5 d f b d d 4 4 . .
    b d d d b b d 5 5 5 4 4 4 4 4 b
    b b d 5 5 5 b 5 5 4 4 4 4 4 b .
    b d c 5 5 5 5 d 5 5 5 5 5 b . .
    c d d c d 5 5 b 5 5 5 5 5 5 b .
    c b d d c c b 5 5 5 5 5 5 5 b .
    . c d d d d d d 5 5 5 5 5 d b .
    . . c b d d d d d 5 5 5 b b . .
    . . . c c c c c c c c b b . . .
`, SpriteKind.Player)
// @highlight
controller.moveSprite(mySprite)
```


## Spawn projectiles

Now lets have our hero shoot some projectiles! Find ``||controller:on A button pressed||`` in ``||controller:Controller||``, and drag it into the workspace.

```blocks
// @highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
})
```


## Draw your projectile

From ``||sprites:Sprites||`` drag ``||variables:projectile from mySprite||`` into the ``||controller:on A button pressed||``. Set the ``||sprites:vy||`` to `0`, then click on the grey square to draw a projectile. Use the spacebar on your keyboard or click the **A** button in the simulator to try it out!

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    // @highlight
    let projectile = sprites.createProjectileFromSprite(img`
        . . . 6 6 6 6 6 6 . . .
        . . 6 9 9 9 9 9 9 6 . .
        . 6 1 9 9 9 9 9 9 9 6 .
        f 1 9 9 9 9 1 1 9 9 9 6
        f 1 9 9 9 9 1 1 9 9 9 6
        f 1 9 9 9 9 9 9 9 9 9 6
        f 1 9 9 9 9 9 9 1 9 9 6
        f 1 9 9 9 9 9 9 9 9 9 6
        f 1 9 9 9 9 9 9 9 9 9 6
        . f 1 9 9 9 9 9 9 1 6 .
        . . f 1 1 1 1 1 1 f . .
        . . . f f f f f f . . .
    `, mySprite, 50, 0)
})
```

## Conclusion @unplugged

Next, let's create some enemies for our hero to fight!


|      |      |      |
|:----:|:----:|:----:|
| [![Walking hero](/static/concepts/walking-hero.png)](#recipe:/concepts/walking-hero) |  [![Walking hero](/static/concepts/picnic-food.png)](#recipe:/concepts/picnic-food) | [![Walking hero](/static/concepts/princess-pizza.png)](#recipe:/concepts/princess-pizza) |
| [**Create enemies**](#recipe:/concepts/walking-hero) | [**Add background effects**](#recipe:/concepts/picnic-food) | [**Add new projectiles**](#recipe:/concepts/princess-pizza) |