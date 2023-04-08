// TP CHRONOMETRE
let timerVal = 0;
let chronoId = document.querySelector("#chronoId");

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let startId = document.querySelector("#startId")
    startId.addEventListener("click",timer);

function timer(){
    timerVal = setInterval(()=>{
        let milisecondsShow = (miliseconds < 10 ) ? "0" + miliseconds : miliseconds;
        let secondsShow = (seconds < 10 ) ? "0" + seconds : seconds;
        let minutesShow = (minutes < 10 ) ? "0" + minutes : minutes;
        let hoursShow = (hours < 10 ) ? "0" + hours : hours;
    chronoId.innerHTML = hoursShow +" <span class='mono'>h</span> "
    + minutesShow +" <span class='mono'>min</span> "
    + secondsShow +" <span class='mono'>sec</span> "
    + milisecondsShow +" <span class='mono'>ms</span>";

        miliseconds += 1

        if (miliseconds >= 10){
            miliseconds = 0
            seconds += 1
        }
        if (seconds >= 60){
            seconds = 0
            minutes += 1
        }
        if (minutes >= 60){
            minutes = 0
            hours += 1
        }

    },100);

     // disable l'evenement click apres une seule click
     startId.setAttribute("disabled","")
}
console.log(timer)
/**function chrono (){
    let d = new Date;
    let ms = d.getMilliseconds;
    let sec = d.getSeconds;
    let min = d.getMinutes;
    let h = d.getHours;
    
    if (ms < 10){ ms = 00 + ms }
     else if(ms < 100){ ms = 0 + ms};
    if (sec < 10){ sec = 00 + sec };
    if (min < 10){ min = 00 + min };
    if (h < 10){ h = 00 + h };

    chronoId.innerHTML = h +" <span class='mono'>h</span>"
    + min +" <span class='mono'>min</span>"
    + sec +" <span class='mono'>sec</span>"
    + ms +" <span class='mono'>ms</span>";

    timerVal = setInterval("chrono()",0);
} **/

let stopId = document.querySelector("#stopId")
    stopId.addEventListener("click",fnctStopChrono);
    function fnctStopChrono() {
        clearInterval(timerVal);
         //activer l'evenement click apres une seule click
        startId.removeAttribute("disabled","")
    }


let resetId = document.querySelector("#resetId")
    resetId.addEventListener("click",fnctReset);
    function fnctReset() {
        hours=0
        minutes=0
        seconds=0
        miliseconds=0

        clearInterval(timerVal);

        chronoId.innerHTML = hours +" <span class='mono'>h</span> "
    + minutes +" <span class='mono'>min</span> "
    + seconds +" <span class='mono'>sec</span> "
    + miliseconds +" <span class='mono'>ms</span>";

        }

