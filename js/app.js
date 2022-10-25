var hourHand = document.querySelector(".hour-hand")
var minuteHand = document.querySelector(".minute-hand")
var secondHand = document.querySelector(".second-hand")

setInterval(setDate, 1000)

function setDate() {
    var now = new Date();

    //  second time 
    var seconds = now.getSeconds();
    var secondDegrees = ((seconds / 60) * 360) +90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    //Minute time
    var minutes = now.getMinutes()
    var minuteDegree = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegree}deg)`;

    //Hour time
    var hour = now.getHours()
    var hourDegree = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;


    





}

// const digitalClock = Document.querySelector(".digital-clock")
// function digitalClock() {
//     //digital clock time
//     digitalClock.textContent = `${seconds} : ${minutes} : ${hour}`;
//     }
    
// setDate()





