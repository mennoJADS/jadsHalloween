$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode == 32 && event.target == document.body) {
            if (this.gameInProgress == true) {
                resetGame()
                return
            } else {
                playVideo()
                return;
            }
        }
    })
});


function getTimeRemaining(endtime) {
    var t = endtime - new Date();
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    if (minutes < 1) {
        $('#timerText').css("background-color", "#c0392b");

    }
    if ((minutes == 0) && (seconds == 0)) {
        gameFailure()
        return
    }
    return {
        'total': t,
        'minutes': ('0' + minutes).slice(-2),
        'seconds': ('0' + seconds).slice(-2)
    };
}

function initializeClock() {
    let id = 'timerText'
    let tt = new Date()
    let endtime = tt.setSeconds(tt.getSeconds() + 120);
    console.log(endtime)
    let clock = document.getElementById(id);
    let timeinterval = setInterval(function () {
        let t = getTimeRemaining(endtime);
        clock.innerHTML = t.minutes + ':' + t.seconds;
        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }, 1000);
}

function gameSucces() {
    $('#intro').hide()
    $('#succesScreen').show()
    $('#succesCode').text('RX')
}

function gameFailure() {
    let letter = 'X'
    $('#intro').hide()
    $('#failureScreen').show()
    $('#failureCode').text('GAME OVER')
    $('#failurePrice').text('Troostletter: ' + letter)
}


function resetGame() {
    location.reload();
}

function startGame() {
    initializeClock()
}

function playVideo() {
    let video = document.getElementById("intro");
    this.gameInProgress = true
    video.play()
    video.onended = function () {
        $('#intro').hide()
        startGame()
    };
}