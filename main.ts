let cnt = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(randint(1, 6))
})
input.onButtonPressed(Button.B, function () {
    cnt = 9
    while (cnt >= 0) {
        basic.showNumber(cnt)
        cnt += -1
    }
})
basic.forever(function () {
	
})
