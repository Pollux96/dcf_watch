function Zeige_Uhrzeit () {
    strip.setPixelColor(PixelStunde, neopixel.colors(NeoPixelColors.Black))
    PixelStunde = Stunde * 2 / 24
    strip.setPixelColor(PixelStunde, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(PixelMinute, neopixel.colors(NeoPixelColors.Black))
    PixelMinute = Minute / 2.5
    strip.setPixelColor(PixelMinute, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(PixelSekunde, neopixel.colors(NeoPixelColors.Black))
    PixelSekunde = Sekunde / 2.5
    strip.setPixelColor(PixelSekunde, neopixel.colors(NeoPixelColors.Blue))
    strip.show()
}
function Berechne_Am_Pm () {
    if (Stunde >= 12) {
        basic.showString("PM")
    } else {
        basic.showString("AM")
    }
}
function Berechne_Uhrzeit () {
    Sekunde = Sekunde + 1
    if (Sekunde > 59) {
        Minute = Minute + 1
        Sekunde = 0
    }
    if (Minute > 59) {
        Stunde = Stunde + 1
        Minute = 0
    }
    if (Stunde > 23) {
        Stunde = 0
    }
}
let PixelSekunde = 0
let PixelMinute = 0
let PixelStunde = 0
let Sekunde = 0
let Minute = 0
let Stunde = 0
let strip: neopixel.Strip = null
basic.showLeds(`
    . . . . .
    . # . # .
    . . # . .
    # . . . #
    . # # # .
    `)
basic.pause(2000)
strip = neopixel.create(DigitalPin.P12, 24, NeoPixelMode.RGB)
Stunde = 0
Minute = 0
Sekunde = 0
basic.forever(function () {
    basic.pause(2000)
    Berechne_Am_Pm()
})
basic.forever(function () {
    basic.pause(100)
    Berechne_Uhrzeit()
    Zeige_Uhrzeit()
})
