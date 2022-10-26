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


    ticAudio.play();

    //******************* Digital Clock **********************/
    const ampm = hour >= 12





}

// const digitalClock = Document.querySelector(".digital-clock")
// function digitalClock() {
//     //digital clock time
//     digitalClock.textContent = `${seconds} : ${minutes} : ${hour}`;
//     }
    
// setDate()





