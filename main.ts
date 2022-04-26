input.onPinPressed(TouchPin.P0, function () {
    if (TY != 0) {
        TY += -1
    }
})
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("YOU LOSE")
    game.gameOver()
})
input.onButtonPressed(Button.A, function () {
    if (TX != 0) {
        TX += -1
    }
})
input.onButtonPressed(Button.AB, function () {
    if (sent == 1 && setup == 1) {
        if (TX == ex1 && TY == ey1) {
            game.addScore(1)
            sprite = game.createSprite(TX, TY)
            ex1 = 1000
            ex2 = 10000
        } else if (TX == ex2 && TY == ey2) {
            game.addScore(1)
            sprite = game.createSprite(TX, TY)
            ex2 = 1000
            ey2 = 10000
        } else if (TX == ex3 && TY == ey3) {
            game.addScore(1)
            sprite = game.createSprite(TX, TY)
            ex3 = 1000
            ey3 = 10000
        } else {
            music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
            sprite = game.createSprite(TX, TY)
        }
    } else {
        if (number == 1) {
            if (TX == x2 && TY == y2 || TX == x3 && TY == y3) {
            	
            } else {
                y1 = TY
                x1 = TX
                number += 1
            }
        } else if (number == 2) {
            if (x1 == TX && y1 == TY || TX == x3 && y3 == TY) {
            	
            } else {
                y2 = TY
                x2 = TX
                number += 1
            }
        } else {
            if (x1 == TX && y1 == TY || x2 == TY && y2 == TX) {
            	
            } else {
                y3 = TY
                x3 = TX
                number += -2
            }
        }
    }
})
radio.onReceivedString(function (receivedString) {
    ex1 = parseFloat(receivedString.charAt(0))
    ex2 = parseFloat(receivedString.charAt(1))
    ex3 = parseFloat(receivedString.charAt(2))
    ey1 = parseFloat(receivedString.charAt(3))
    ey2 = parseFloat(receivedString.charAt(4))
    ey3 = parseFloat(receivedString.charAt(5))
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    sent = 1
})
input.onButtonPressed(Button.B, function () {
    if (TX != 5) {
        TX += 1
    }
})
input.onPinPressed(TouchPin.P1, function () {
    if (TY != 5) {
        TY += 1
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("" + x1 + x2 + x3 + y1 + y2 + y3)
    setup = 1
})
let Target: game.LedSprite = null
let sprite: game.LedSprite = null
let ey3 = 0
let ex3 = 0
let ey2 = 0
let ex2 = 0
let ey1 = 0
let ex1 = 0
let sent = 0
let y3 = 0
let y2 = 0
let y1 = 0
let x3 = 0
let x2 = 0
let x1 = 0
let TY = 0
let TX = 0
let setup = 0
let number = 0
radio.setGroup(1)
number = 1
setup = 0
TX = 2
TY = 2
x1 = randint(0, 1)
x2 = randint(3, 4)
x3 = 2
y1 = randint(3, 4)
y2 = 4
y3 = randint(0, 1)
let xy3 = game.createSprite(x3, y3)
let xy2 = game.createSprite(x2, y2)
let xy1 = game.createSprite(x1, y1)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    Target = game.createSprite(TX, TY)
    basic.pause(200)
    Target.delete()
    basic.pause(200)
})
basic.forever(function () {
    if (game.score() == 3) {
        radio.sendNumber(1)
        basic.showString("YOU WIN")
    }
})
basic.forever(function () {
    if (setup == 0) {
        xy1.set(LedSpriteProperty.X, x1)
        xy1.set(LedSpriteProperty.Y, y1)
        xy2.set(LedSpriteProperty.X, x2)
        xy2.set(LedSpriteProperty.Y, y2)
        xy3.set(LedSpriteProperty.X, x3)
        xy3.set(LedSpriteProperty.Y, y3)
    } else {
        xy1.delete()
        xy2.delete()
        xy3.delete()
    }
})
basic.forever(function () {
    if (sent == 0 && setup == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    }
})
