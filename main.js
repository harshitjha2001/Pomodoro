var input=prompt("Enter your work cycle time",25);
document.getElementById('w_minutes').innerHTML=input;
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var stop = document.getElementById('pause');

var wm = document.getElementById('w_minutes');
var ws = document.getElementById('w_seconds');

var bm = document.getElementById('b_minutes');
var bs = document.getElementById('b_seconds');

var startTimer;

start.addEventListener('click', function () {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000)
    } else {
        alert("Timer is already running");
    }
})

reset.addEventListener('click', function () {
    wm.innerText = input;
    ws.innerText = "00";

    bm.innerText = 5;
    bs.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stop.addEventListener('click', function () {
    stopInterval()
    startTimer = undefined;
})

function timer() {
    if (ws.innerText != 0) {
        ws.innerText--;
    } else if (wm.innerText != 0 && ws.innerText == 0) {
        ws.innerText = 59;
        wm.innerText--;
    }

    
    if (wm.innerText == 0 && ws.innerText == 0)
       {
        if( bm.innerText == 5 && bs.innerText == 00)
        {
            alert('session over ! please take rest');
        }
        if (bs.innerText != 0) {
            bs.innerText--;
            
        } else if (bm.innerText != 0 && bs.innerText == 0) {
            bs.innerText = 59;
            bm.innerText--;
        }
    }



    if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
        alert('break over! start working again');
        wm.innerText = input;
        ws.innerText = "00";

        bm.innerText = 5;
        bs.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}

function stopInterval() {
    clearInterval(startTimer);
}
