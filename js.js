let startbtn = document.getElementById("Play");
let stopbtn = document.getElementById("Stop");
let resetbtn = document.getElementById("Reset");
let roundbtn = document.getElementById("round");
let pausebtn = document.getElementById("Pause");

let startTime;
let elapsedTime = 0;
let timerInterval;

let hour=0;
let minute=0;
let secound=0;
let milisecounds=0;

startbtn.addEventListener('click', function () {
    start();
});

stopbtn.addEventListener('click', function () {
    stop();
});

resetbtn.addEventListener('click', function () {
    reset();
});

roundbtn.addEventListener('click', function () {
    round();
});

pausebtn.addEventListener('click', function () {
    pause();
});


function stopwatch(time) {
    let diffInHrs = time / 3600000;
     hour = Math.floor(diffInHrs);
    let hourString = hour;

    let diffInMin = (diffInHrs - hour) * 60;
     minute = Math.floor(diffInMin);
    let minuteStg = minute;

    let diffInSec = (diffInMin - minute) * 60;
     secound = Math.floor(diffInSec);
    let secoundStg = secound;

    let diffinmili = (diffInSec - secound) * 100;
     milisecounds = Math.floor(diffinmili);
    let millisecoundsStg = milisecounds;

    if (hour < 10) {
        hourString = "0" + hourString;
    }
    if (minute < 10) {
        minuteStg = "0" + minuteStg
    }
    if (secound < 10) {
        secoundStg = "0" + secoundStg;
    }
    if (milisecounds < 10) {
        millisecoundsStg = "0" + millisecoundsStg;
    }

    document.getElementById("hours").innerHTML = hourString;
    document.getElementById("minutes").innerHTML = minuteStg;
    document.getElementById("secounds").innerHTML = secoundStg;
    document.getElementById("milisecounds").innerHTML = millisecoundsStg;
}

function start() {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function printTime() {
        elapsedTime = Date.now() - startTime;
        stopwatch(elapsedTime);
    }, 10);
}

function stop() {
    clearInterval(timerInterval);
    
}

function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    stopwatch(elapsedTime);
    document.getElementById("numbers").remove();
}

function create(h, s, m, mm) {
    
    counter++;
    var ul=document.getElementById("roundli");
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(h+":"+s+":"+m+":"+mm));
    
    li.setAttribute("id", "numbers");
    ul.appendChild(li);


    
}

function round() {

    let hourStg=hour;
    let minuteStg=minute;
    let secoundStg=secound;
    let millisecoundStg=milisecounds;

    if (hour < 10) {
        hourStg = "0" + hourStg;
    }
    if (minute < 10) {
        minuteStg = "0" + minuteStg
    }
    if (secound < 10) {
        secoundStg = "0" + secoundStg;
    }
    if (milisecounds < 10) {
        millisecoundStg = "0" + millisecoundStg;
    }

    create(hourStg, minuteStg, secoundStg, secoundStg);
    
        // document.getElementById("h").innerHTML=hourStg;
        // document.getElementById("m").innerHTML=minuteStg;
        // document.getElementById("s").innerHTML=secoundStg;
        // document.getElementById("ms").innerHTML=millisecoundStg;

}

function pause() {
    clearInterval(timerInterval);
}
