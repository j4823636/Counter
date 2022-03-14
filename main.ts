function replay () {
    basic.showArrow(ArrowNames.North)
}
radio.onReceivedNumber(function (receivedNumber) {
    opponent = receivedNumber
    while (mine == 0) {
        basic.showString("?")
    }
    if (opponent != 0) {
        basic.pause(1000)
        battle()
        basic.pause(5000)
        replay()
    }
})
input.onButtonPressed(Button.A, function () {
    mine = a
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
})
function battle () {
    if (mine == opponent) {
        basic.showString("same")
    } else if (mine == 1 && opponent == 3) {
        basic.showIcon(IconNames.Heart)
    } else if (mine == 2 && opponent == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (mine == 3 && opponent == 2) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Confused)
    }
}
input.onButtonPressed(Button.AB, function () {
    mine = a
    basic.showLeds(`
        # # . # #
        # # . # #
        # . . . #
        # . . . #
        # # # # #
        `)
})
input.onButtonPressed(Button.B, function () {
    mine = a
    basic.showLeds(`
        . # # # .
        . . # . .
        . # # # .
        # . # . #
        # . # . #
        `)
})
let mine = 0
let opponent = 0
let a = 0
radio.setGroup(a)
replay()
basic.forever(function () {
    serial.writeNumber(opponent)
    radio.sendNumber(mine)
})
