'use strict'

// blue = w
// red = a
// yellow = s
// black = earth

"use strict";
class BomGame {
    constructor() {
        self = this


        this.rightSteps = 0
        this.rightStepsdone = []


        this.defusePattern = {
            'red': 'cut',
            'blue': 'switchToD',
            'yellow': 'switchToF'   
        }

        $(window).keyup(function (event) {
            if (    event.key == "ArrowLeft" ||
                    event.key == "ArrowRight" ||
                    event.key == "ArrowUp" ||
                    event.key == "ArrowDown" ||
                    event.key == 'd' ||
                    event.key == 'f' ||
                    event.key == 'g'
            ){
                self.explode()
            }
            if (event.key == 'w') {
                self.checkColor('blue')
            }
            else if (event.key == 'a') {
                self.checkColor('red')

            } else if (event.key == 's') {
                self.checkColor('yellow')
            } 
        });

        $(window).keydown(function (event) {
            console.log(event.key)
            console.log(!self.rightStepsdone.includes('switchToD'))
            if (event.key == 'd' &&  (! self.rightStepsdone.includes('switchToD'))) {
                if(self.defusePattern[self.switchColor] == 'switchToD'){
                    clearTimeout(self.switchCountDown);
                    self.rightSteps += 1
                    self.rightStepsdone.push('switchToD')
                    self.checkGameSuccess()
                }else{
                    self.explode()
                }
            }
            else if (event.key == 'f' &&  (! self.rightStepsdone.includes('switchToF'))) {
                if(self.defusePattern[self.switchColor] == 'switchToF'){
                    clearTimeout(self.switchCountDown);
                    self.rightSteps += 1
                    self.rightStepsdone.push('switchToF')
                    self.checkGameSuccess()
                }else{
                    self.explode()
                }
            } else if (event.key == 'g' &&  (! self.rightStepsdone.includes('switchToG'))) {
                if(self.defusePattern[self.switchColor] == 'switchToG'){
                    clearTimeout(self.switchCountDown);
                    self.rightSteps += 1
                    self.rightStepsdone.push('switchToG')
                    self.checkGameSuccess()
                }else{
                    self.explode()
                }
            }
        });

    }

    explode(){
        alert('die die die')
    }

    checkColor(color){
        console.log(color)
        console.log(this.defusePattern[color])
        if (this.defusePattern[color] == 'cut' && (! this.rightStepsdone.includes(color))){
            this.rightStepsdone.push(color)
            this.rightSteps += 1
            this.checkGameSuccess()
            return false
        }else if (  this.defusePattern[color] == 'switchToD' || 
                    this.defusePattern[color] == 'switchToF' || 
                    this.defusePattern[color] == 'switchToG' ){
            console.log('switch detected ')
            this.switchCountDown = setTimeout(function(){alert('die die die')}, 5000);
            console.log('switch detected ')

            this.switchColor = color
            console.log(this.switchColor)

            return false
        }
        this.explode()
    }

    checkGameSuccess(){
        console.log('checking right')
        console.log(this.rightSteps)
        if (this.rightSteps == 3){
            alert('DEFUSED YEEY')
        }
    }
}

$(document).ready(function () {
    let game = new BomGame()
});
