function Zeige_Uhrzeit () {
    strip.setPixelColor(Stunde * 2 / 24 + 12, neopixel.colors(NeoPixelColors.Red))
    strip.setPixelColor(Minute / 2.5 + 12, neopixel.colors(NeoPixelColors.Green))
    strip.setPixelColor(Sekunde / 2.5 + 12, neopixel.colors(NeoPixelColors.Blue))
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
let Sekunde = 0
let Minute = 0
let Stunde = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P12, 24, NeoPixelMode.RGB)
Stunde = 0
Minute = 0
Sekunde = 0
basic.forever(function () {
    basic.pause(1000)
    Berechne_Uhrzeit()
    Zeige_Uhrzeit()
    Berechne_Am_Pm()
})
