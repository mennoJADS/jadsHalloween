//blue = w
//green = a
///orange = s
//red = d

"use strict";

let letters = ['T L','I L','S','K','D E','L A','R A','G O']
let position = ['3  2', '2  6', 5, 4, '5  2', '3  5', '4  2', '3  1']
let group = null
let bom = false

class BatteryGame {
    constructor() {
        self = this

        $('#b1 #l1').addClass('green')
        $('#b1 #l2').addClass('orange')
        $('#b1 #l3').addClass('red')
        $('#b1 #l4').addClass('blue')

        $('#b2 #l1').addClass('orange')
        $('#b2 #l2').addClass('red')
        $('#b2 #l3').addClass('redblue')
        $('#b2 #l4').addClass('green')

        $('#b3 #l1').addClass('redorange')
        $('#b3 #l2').addClass('greenblue')
        $('#b3 #l3').addClass('greenred')
        $('#b3 #l4').addClass('blueorange')

        $('#b4 #l1').addClass('greenbluered')
        $('#b4 #l2').addClass('greenorange')
        $('#b4 #l3').addClass('redblue')
        $('#b4 #l4').addClass('greenyellowred')

        this.activeBattery = 0
        this.activeLevel = 1
        this.keyPress = false
        this.batteries = [{
            1: 'green',
            2: 'orange',
            3: 'red',
            4: 'blue'
        },
        {
            1: 'orange',
            2: 'red',
            3: 'redblue',
            4: 'green'
        }, {
            1: 'redorange',
            2: 'greenblue',
            3: 'greenred',
            4: 'blueorange'
        }, {
            1: 'greenbluered',
            2: 'greenorange',
            3: 'redblue',
            4: 'greenyellowred'
        }]
        this.keys = {};


        this.currentColor = this.batteries[0][1]
        console.log(this.currentColor)
        console.log(this.batteries[this.activeBattery][this.activeLevel])

        $(window).keydown(function (event) {
            if (event.key >= 0 && event.key <= 9 && event.target == document.body) {
                playVideo()
                group = event.key
                return
            }

            if (event.keyCode == 32 && event.target == document.body) {
                self.resetGame()
                return
            }

            self.keys[event.key] = true;
            self.keyPress == true
            console.log(self.batteries)
            let activeBatteryID = '#b' + String(self.activeBattery + 1)
            let activeLevelID = '#l' + String(self.activeLevel)
            let currentColor = self.batteries[self.activeBattery][self.activeLevel]
            let currentProgessBar = activeBatteryID + ' ' + activeLevelID + ' .progress-bar'
            let nrKeys = Object.keys(self.keys).length;

            console.log(currentColor)
            console.log(self.keys)


            if(currentColor == 'greenyellowred' && 's' in self.keys && 'a' in self.keys && 'd' && nrKeys == 3){
                self.incrementProgressBar(currentProgessBar)
            }
            else if (currentColor == 'greenbluered' && 'w' in self.keys && 'a' in self.keys && 'd' in self.keys && nrKeys == 3){
                self.incrementProgressBar(currentProgessBar)
            }
            else if (currentColor == 'greenorange' && 'a' in self.keys && 's' in self.keys && nrKeys == 2){
                self.incrementProgressBar(currentProgessBar)
            }else if (currentColor == 'redblue' && 'w' in self.keys && 'd' in self.keys && nrKeys == 2){
                self.incrementProgressBar(currentProgessBar)
            }else if (currentColor == 'redorange' && 'd' in self.keys && 's' in self.keys && nrKeys == 2){
                self.incrementProgressBar(currentProgessBar)
            }else if (currentColor == 'greenblue' && 'a' in self.keys && 'w' in self.keys && nrKeys == 2){
                self.incrementProgressBar(currentProgessBar)
            }else if (currentColor == 'greenred' && 'a' in self.keys && 'd' in self.keys && nrKeys == 2){
                self.incrementProgressBar(currentProgessBar)
            }else if (currentColor == 'blueorange' && 'w' in self.keys && 's' in self.keys && nrKeys == 2){
                self.incrementProgressBar(currentProgessBar)
            }else if (currentColor == 'blue' && event.key == 'w' && nrKeys == 1) {
                self.incrementProgressBar(currentProgessBar)
            }else if (currentColor == 'green' && event.key == 'a' && nrKeys == 1) {
                self.incrementProgressBar(currentProgessBar)
            }else if (currentColor == 'orange' && event.key == 's' && nrKeys == 1) {
                self.incrementProgressBar(currentProgessBar)
            }else if (currentColor == 'red' && event.key == 'd' && nrKeys == 1) {
                self.incrementProgressBar(currentProgessBar)
            }

        });



        $(window).keyup(function (event) {
            delete self.keys[event.key];
        });

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


    incrementLevel() {
        if ((this.activeLevel == 4) && (this.activeBattery == 3)){
            gameSucces()
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
    let game = new BatteryGame()
});
