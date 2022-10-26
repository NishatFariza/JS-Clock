const digitalClock = document.querySelector(".digital-clock")
const hourHand = document.querySelector(".hour-hand")
const minuteHand = document.querySelector(".minute-hand")
const secondHand = document.querySelector(".second-hand")
const ticAudio = document.querySelector("audio")

setInterval(setDate, 1000)

function setDate() {
    const now = new Date();

    //  second time 
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) +90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    //Minute time
    const minutes = now.getMinutes()
    const minuteDegree = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    //Hour time
    const hour = now.getHours()
    const hourDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;

    ticAudio.volume = .2; // 20% volume
    ticAudio.play();

    //******************* Digital Clock **********************/
    const _hour = hour < 10 ? "0" + hour : hour;
    const _minute = minutes < 10 ? "0" + minutes : minutes;
    const _second = seconds < 10 ? "0" + seconds : seconds;
    const ampm = hour >= 12 ? "PM" : "AM";


    digitalClock.textContent = `${_hour} : ${_minute} : ${_second}  ${ampm} `;


}







