radio.onReceivedNumber(function (receivedNumber) {
    while (in_setup) {
        break;
    }
    while (in_game) {
        if (player_number == receivedNumber) {
            number_of_dices += 1
            basic.clearScreen()
            basic.showIcon(IconNames.SmallSquare)
            basic.pause(500)
        }
        break;
    }
})
input.onButtonPressed(Button.A, function () {
    while (in_setup) {
        player_number += -1
        if (player_number < 1) {
            player_number = 6
        }
        basic.showNumber(player_number)
        break;
    }
    while (in_game) {
        if (dice_value == 1) {
            radio.sendNumber(player)
            radio.sendNumber(dice_value)
            number_of_dices += -1
            if (number_of_dices > 0) {
                basic.showIcon(IconNames.SmallSquare)
            } else {
                basic.showIcon(IconNames.Square)
            }
        }
        break;
    }
})
input.onButtonPressed(Button.AB, function () {
    while (in_setup) {
        player = player_number
        basic.clearScreen()
        basic.pause(500)
        basic.showNumber(player)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
        basic.showNumber(player)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
        basic.showNumber(player)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
        basic.showNumber(player)
        basic.pause(500)
        in_setup = 0
        in_game = 1
        basic.showIcon(IconNames.Square)
        break;
    }
})
input.onButtonPressed(Button.B, function () {
    while (in_setup) {
        player_number += 1
        if (player_number > 6) {
            player_number = 1
        }
        basic.showNumber(player_number)
        break;
    }
    while (in_game) {
        if (dice_value == 6) {
            radio.sendNumber(player)
            radio.sendNumber(dice_value)
            number_of_dices += -1
            if (number_of_dices > 0) {
                basic.showIcon(IconNames.SmallSquare)
            } else {
                basic.showIcon(IconNames.Square)
            }
        }
        break;
    }
})
input.onGesture(Gesture.Shake, function () {
    while (number_of_dices > 0) {
        dice_value = randint(1, 6)
        basic.showNumber(dice_value)
        if (dice_value == 1 || dice_value == 6) {
            break;
        }
        break;
    }
})
let player = 0
let dice_value = 0
let in_setup = 0
let in_game = 0
let number_of_dices = 0
let player_number = 0
radio.setGroup(1)
player_number = 1
number_of_dices = 0
in_game = 0
in_setup = 1
basic.showNumber(player_number)
