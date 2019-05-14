"use strict";

let letters = ['A','B','I','K','B','I','S','R']
let position = [4, 4, 4, 1, 3, 2, 5, 2]
let checkArray = ['B','A','G','A','B','B','B','C']
let group = null
let bom = false



class PianoGame {
    constructor() {
        self = this


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
        this.gameInProgress = false

        this.currentColor = this.batteries[0][1]
        console.log(this.currentColor)
        console.log(this.batteries[this.activeBattery][this.activeLevel])

        this.activeNote = 1
        this.noteSequence = []
        let audio = document.getElementById("noteF");

            $(window).keydown(function (event) {

            if (event.key >= 0 && event.key <= 9 && event.target == document.body) {
                playVideo()
                group = event.key
                return
            }

            self.keys[event.key] = true;
            let activeNoteID = '#n' + String(self.activeNote)
            let nrKeys = Object.keys(self.keys).length;


            if (event.key == 'w' && nrKeys == 1) {
                audio.pause()
                audio.currentTime = 0;
                $(activeNoteID).text('C')
                audio = document.getElementById("noteC");
                audio.play()
                $(activeNoteID).css({ 'background': '#e74c3c' })
                $(activeNoteID).css({ 'border-color': '#e74c3c' })
                $(activeNoteID).css({ 'color': '#fff' })
                self.activeNote += 1
                self.noteSequence.push('C')
                if (self.activeNote == 9) {
                    self.checkSequence()
                }
            }
            else if (event.key == 'a' && nrKeys == 1) {
                audio.pause()
                audio.currentTime = 0;
                $(activeNoteID).text('D')
                audio = document.getElementById("noteD");
                audio.play()
                $(activeNoteID).css({ 'background': '#e67e22' })
                $(activeNoteID).css({ 'border-color': '#e67e22' })
                $(activeNoteID).css({ 'color': '#fff' })
                self.activeNote += 1
                self.noteSequence.push('D')
                if (self.activeNote == 9) {
                    self.checkSequence()
                }

            } else if (event.key == 's' && nrKeys == 1) {
                audio.pause()
                audio.currentTime = 0;
                $(activeNoteID).text('E')
                audio = document.getElementById("noteE");
                audio.play()
                $(activeNoteID).css({ 'background': '#f1c40f' })
                $(activeNoteID).css({ 'border-color': '#f1c40f' })
                $(activeNoteID).css({ 'color': '#fff' })
                self.activeNote += 1
                self.noteSequence.push('E')
                if (self.activeNote == 9) {
                    self.checkSequence()
                }


            } else if (event.key == 'd' && nrKeys == 1) {
                audio.pause()
                audio.currentTime = 0;
                console.log(activeNoteID)
                $(activeNoteID).text('F')
                audio = document.getElementById("noteF");
                audio.play()
                $(activeNoteID).css({ 'background': '#2ecc71' })
                $(activeNoteID).css({ 'border-color': '#2ecc71' })
                $(activeNoteID).css({ 'color': '#fff' })
                self.activeNote += 1
                self.noteSequence.push('F')
                if (self.activeNote == 9) {
                    self.checkSequence()
                }

            } else if (event.key == 'f' && nrKeys == 1) {
                audio.pause()
                audio.currentTime = 0;
                $(activeNoteID).text('G')
                audio = document.getElementById("noteG");
                audio.play()
                $(activeNoteID).css({ 'background': '#1abc9c' })
                $(activeNoteID).css({ 'border-color': '#1abc9c' })
                $(activeNoteID).css({ 'color': '#fff' })
                self.activeNote += 1
                self.noteSequence.push('G')
                if (self.activeNote == 9) {
                    self.checkSequence()
                }

            } else if (event.key == 'g' && nrKeys == 1) {
                audio.pause()
                audio.currentTime = 0;
                $(activeNoteID).text('A')
                audio = document.getElementById("noteA");
                audio.play()
                $(activeNoteID).css({ 'background': '#3498db' })
                $(activeNoteID).css({ 'border-color': '#3498db' })
                $(activeNoteID).css({ 'color': '#fff' })
                self.activeNote += 1
                self.noteSequence.push('A')
                if (self.activeNote == 9) {
                    self.checkSequence()
                }


            } else if (event.key == 'ArrowUp' && nrKeys == 1) {
                audio.pause()
                audio.currentTime = 0;
                $(activeNoteID).text('B')
                audio = document.getElementById("noteB");
                audio.play()
                $(activeNoteID).css({ 'background': '#9b59b6' })
                $(activeNoteID).css({ 'border-color': '#9b59b6' })
                $(activeNoteID).css({ 'color': '#fff' })
                self.activeNote += 1
                self.noteSequence.push('B')
                if (self.activeNote == 9) {
                    self.checkSequence()
                }
            }
        });
        $(window).keyup(function (event) {
            delete self.keys[event.key];
        });

    }

    checkSequence() {
        console.log(self.noteSequence)
        if(this.arraysEqual(self.noteSequence, checkArray)){
            gameSucces()
        }else{
            this.buzz()
        }
    }

    arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;

        // If you don't care about the order of the elements inside
        // the array, you should sort both arrays here.
        // Please note that calling sort on an array will modify that array.
        // you might want to clone your array first.

        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    buzz(){
        //todo play wrong sound
        let audioError = document.getElementById("error");
        audioError.play()
        $('.circle').text()
        $('.circle').css({'background': '#fff'})
        $('.circle').css({'border-color': '#2c3e50'})
        $('.circle').addClass('shake')
        setTimeout(function(){
            $('.circle').removeClass('shake')
         }, 510);
        this.activeNote = 1
        this.noteSequence = []
    }
}

$(document).ready(function () {
    let game = new PianoGame()
});
