let start = 0
let elapsed = 0
input.onButtonPressed(Button.A, function () {
    start = input.runningTime()
    basic.showNumber(start / 1000)
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - start
    basic.showNumber(elapsed / 1000)
})
