input.onButtonPressed(Button.A, function () {
    if (interroptor == 0) {
        número1 += 1
        basic.showNumber(número1)
    }
    if (interroptor == 1) {
        número2 += 1
        basic.showNumber(número2)
    }
})
input.onButtonPressed(Button.AB, function () {
    OP += 1
    if (OP == 1) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (OP == 2) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            if (OP == 3) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
                if (OP == 4) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                } else {
                    OP = 1
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    interroptor += 1
    if (interroptor == 2) {
        if (OP == 1) {
            basic.showNumber(número1 + número2)
        } else {
            if (OP == 2) {
                basic.showNumber(número1 - número2)
            } else {
                if (OP == 3) {
                    basic.showNumber(número1 * número2)
                } else {
                    basic.showNumber(número1 / número2)
                }
            }
        }
    }
})
let interroptor = 0
let número2 = 0
let número1 = 0
let OP = 0
OP = 1
número1 = 0
número2 = 0
interroptor = 0
basic.forever(function () {
	
})
