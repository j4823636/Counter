def replay():
    global mine
    basic.show_arrow(ArrowNames.NORTH)
    mine = 0

def on_received_number(receivedNumber):
    global opponent
    opponent = receivedNumber
    while mine == 0:
        basic.show_string("?")
    if opponent != 0:
        basic.pause(1000)
        battle()
        basic.pause(5000)
        replay()
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    global mine
    mine = a
    basic.show_leds("""
        # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
    """)
input.on_button_pressed(Button.A, on_button_pressed_a)

def battle():
    pass

def on_button_pressed_ab():
    global mine
    mine = a
    basic.show_leds("""
        # # . # #
                # # . # #
                # . . . #
                # . . . #
                # # # # #
    """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global mine
    mine = a
    basic.show_leds("""
        . # # # .
                . . # . .
                . # # # .
                # . # . #
                # . # . #
    """)
input.on_button_pressed(Button.B, on_button_pressed_b)

opponent = 0
mine = 0
a = 0
radio.set_group(a)
replay()

def on_forever():
    serial.write_number(opponent)
    radio.send_number(mine)
basic.forever(on_forever)
