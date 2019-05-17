$(document).ready(function () {
    $(window).keydown(function (event) {
        if (event.keyCode == 32 && event.target == document.body) {
          resetGame()
        }
    })
});


function getTimeRemaining(endtime) {
    var t = endtime - new Date();
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    if (minutes < 1) {
        $('#timerText').css("background-color", "#c0392b");
        if(bom == true){
            $('#timerText').addClass('lastMinute');
        }
    }
    if ((minutes == 0) && (seconds == 0)) {
        if(bom == true){
            explode()
        }else{
            gameFailure()
        }
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
    let endtime = tt.setSeconds(tt.getSeconds() + 1201);
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
    $('#gameScreen').hide()
    $('#succesScreen').show()
    $('#succesCode').text(letters[group-1].toLowerCase())
    $('#succesPosition').text(position[group-1])
}

function explode(){
    $('#intro').hide()
    $('#gameScreen').hide()
    $('#failureScreen').show()
    $('#failureCode').text('GAME OVER')
}

function gameFailure() {
    $('#intro').hide()
    $('#gameScreen').hide()
    $('#failureScreen').show()
    $('#failureCode').text('GAME OVER')
    $('#failurePrice').text('Troostletter: ' + letters[group-1].toLowerCase())
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
