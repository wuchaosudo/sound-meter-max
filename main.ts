let soundLevel = 0
let maxSound = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(maxSound)
    } else {
        soundLevel = input.soundLevel()
        led.plotBarGraph(
        soundLevel,
        255
        )
        if (soundLevel > maxSound) {
            maxSound = soundLevel
        }
    }
})
