input.onButtonPressed(Button.A, function () {
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 25)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 25)
    basic.pause(1100)
    maqueen.motorStop(maqueen.Motors.All)
})
maqueen.IR_callbackUser(function (message) {
    if (message == 0) {
        Dist2 = ""
        basic.showString(Dist2)
    } else if (message == 1) {
        basic.showString("" + (parseFloat(Dist2)))
    } else {
        Dist2 = "" + Dist2 + text_list[list.indexOf(message)]
        basic.showString("" + (text_list[list.indexOf(message)]))
    }
    basic.pause(100)
})
let text_list: string[] = []
let list: number[] = []
let Dist2 = ""
let Dist1 = 0
Dist2 = ""
let Dist3 = 0
list = [17, 18, 19, 20, 21, 22, 23, 24, 25, 16]
text_list = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
basic.forever(function () {
	
})
