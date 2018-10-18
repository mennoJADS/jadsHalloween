'use strict'

//red = a
// black = s
/// blue = d

"use strict";
class BomGame {
    constructor() {
        self = this


        this.defusePattern = [{
            'switch': 'red'
            'cut': 'black'
            'notouch': 'blue'
        }]

        $(window).keyup(function (event) {
            if (event.key == 'a') {
                let explode = this.checkColor('red')
                if(explode == false){

                }
            }
            else if (event.key == 's') {
                let explode = this.checkColor('red')

            } else if (event.key == 'd') {
                let explode = this.checkColor('red')
            }
        });

        $(window).keydown(function (event) {
            $(window).keyup(function (event) {
            if (event.key == 'a') {
                let explode = this.checkDownColor('red')
                if(explode == false){
                    
                }
            }
            else if (event.key == 's') {
                let explode = this.checkColor('red')

            } else if (event.key == 'd') {
                let explode = this.checkColor('red')
            }
        });
        });

    }

    checkColor(color){
        if (this.defusePattern[color] == 'notouch'){
            return true
        }else if (this.defusePattern[color] == 'cut'){
            return false
        }else if (this.defusePattern[color] == 'switch'){
            this.switchTimer = 250
            return false
        }
    }

    checkDownColor(){
        if (this.defusePattern[color] == 'notouch'){
            return false
        }else if (this.defusePattern[color] == 'cut'){
            return true
        }else if (this.defusePattern[color] == 'switch'){
            this.switchTimer = 250
            return false
        }
    }

    incrementProgressBar(currentProgessBar) {
        let value = parseInt($(currentProgessBar).attr('aria-valuenow'))
        if (value < 100) {
            value += 2;
            console.log(value)
            $(currentProgessBar).css('width', value + '%').attr('aria-valuenow', value);
        } else {
            self.incrementLevel()
        }
    }

    decrementProgressBar(currentProgessBar) {
        let value = parseInt($(currentProgessBar).attr('aria-valuenow'))
        if (value > 0) {
            value -= 2;
            console.log(value)
            $(currentProgessBar).css('width', value + '%').attr('aria-valuenow', value);
        } else {
            self.decrementLevel()
        }
    }

    incrementLevel() {
        if ((this.activeLevel == 1) && (this.activeBattery == 3)) {
            this.gameSucces()
        }
        if (this.activeLevel < 4) {
            this.activeLevel += 1
        } else {
            this.activeLevel = 1
            this.activeBattery += 1
        }
    }



}

$(document).ready(function () {
    let game = new BomGame()
});
