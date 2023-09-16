const timer = document.querySelector('.timer');
const startBtn = document.querySelector('#start-stop-btn');
const resetBtn = document.querySelector('#reset');

let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingS = 0;
let leadingM = 0;
let leadingH = 0;

let timeInterval = null;
let timeStatus = "stopped";

function stopWatch() {

    seconds++

    if ( seconds / 60 === 1 ) {
        seconds = 0;
        minutes++;

        if ( minutes / 60 === 1 ) {
            minutes = 0;
            hours++;
        
        if ( hours / 24  === 1 ) {
            hours = 0;
        }
                
        }
    }

    if ( seconds < 10 ) {
        leadingS = "0" + seconds.toString();
    } else {
        leadingS = seconds;
    }

    if ( minutes < 10 ) {
        leadingM = "0" + minutes.toString();
    } else {
        leadingM = minutes;
    }

    if ( hours < 10 ) {
        leadingH = "0" + hours.toString();
    } else {
        leadingH = hours;
    }

    let displayTimer = timer.innerHTML = leadingH + ":" + leadingM + ":" + leadingS; 

}

startBtn.addEventListener('click', function () {
    if ( timeStatus === "stopped" ) {
        timeInterval = window.setInterval(stopWatch, 1000);
        startBtn.innerHTML = '<i class="fa-solid fa-pause" id="pause"></i>';
        timeStatus = "started";
    } else {
        window.clearInterval(timeInterval);
        startBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
        timeStatus = "stopped";
    }
})

resetBtn.addEventListener('click', function () {
    window.clearInterval(timeInterval);

    seconds = 0;
    minutes = 0;
    hours = 0;

    timer.innerHTML = "00:00:00";

    startBtn.innerHTML = '<i class="fa-solid fa-play" id="play"></i>';
    timeStatus = "stopped";
})
