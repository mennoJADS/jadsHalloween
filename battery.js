//blue = w
//green = a
///orange = s
//red = d

"use strict";
class BatteryGame {
    constructor() {
        self = this
        self.playVideo()

        $('#b1 #l1').addClass('greenBlue')
        $('#b1 #l2').addClass('orange')
        $('#b1 #l3').addClass('red')
        $('#b1 #l4').addClass('blue')

        $('#b2 #l1').addClass('green')
        $('#b2 #l2').addClass('orange')
        $('#b2 #l3').addClass('red')
        $('#b2 #l4').addClass('blue')

        $('#b3 #l1').addClass('green')
        $('#b3 #l2').addClass('orange')
        $('#b3 #l3').addClass('red')
        $('#b3 #l4').addClass('blue')

        $('#b4 #l1').addClass('green')
        $('#b4 #l2').addClass('orange')
        $('#b4 #l3').addClass('red')
        $('#b4 #l4').addClass('blue')

        this.activeBattery = 0
        this.activeLevel = 1
        this.keyPress = false
        this.batteries = [{
            1: 'purple',
            2: 'orange',
            3: 'red',
            4: 'blue'
        },
        {
            1: 'green',
            2: 'orange',
            3: 'red',
            4: 'blue'
        }, {
            1: 'green',
            2: 'orange',
            3: 'red',
            4: 'blue'
        }, {
            1: 'green',
            2: 'orange',
            3: 'red',
            4: 'blue'
        }]
        this.keys = {};

       
        this.currentColor = this.batteries[0][1]
        console.log(this.currentColor)
        console.log(this.batteries[this.activeBattery][this.activeLevel])

        $(window).keydown(function (event) {
            if (event.keyCode == 32 && event.target == document.body) {
                event.preventDefault();
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

            if (currentColor == 'blue' && event.key == 'w' && nrKeys == 1) {
                self.incrementProgressBar(currentProgessBar)
            }
            else if (currentColor == 'green' && event.key == 'a' && nrKeys == 1) {
                self.incrementProgressBar(currentProgessBar)
            } else if (currentColor == 'orange' && event.key == 's' && nrKeys == 1) {
                self.incrementProgressBar(currentProgessBar)
            } else if (currentColor == 'red' && event.key == 'd' && nrKeys == 1) {
                self.incrementProgressBar(currentProgessBar)
            }else if (currentColor == 'purple' && 'a' in self.keys && 's' in self.keys && nrKeys == 2){
                self.incrementProgressBar(currentProgessBar)
            }
        });



        $(window).keyup(function (event) {
            delete self.keys[event.key];

            console.log(self.batteries)
            let activeBatteryID = '#b' + String(self.activeBattery + 1)
            let activeLevelID = '#l' + String(self.activeLevel)
            let currentColor = self.batteries[self.activeBattery][self.activeLevel]
            let currentProgessBar = activeBatteryID + ' ' + activeLevelID + ' .progress-bar'
            console.log(currentColor)
            if (currentColor == 'blue' && event.key == 'w') {
                self.decrementProgressBar(currentProgessBar)
            }
            else if (currentColor == 'green' && event.key == 'a') {
                self.decrementProgressBar(currentProgessBar)
            } else if (currentColor == 'orange' && event.key == 's') {
                self.decrementProgressBar(currentProgessBar)
            } else if (currentColor == 'red' && event.key == 'd') {
                self.decrementProgressBar(currentProgessBar)
            }
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
        if ((this.activeLevel == 1) && (this.activeBattery == 3)){
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
    let game = new BatteryGame()
});
