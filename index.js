const startButton = document.getElementById("startButton")
const stopButton = document.getElementById("stopButton")
const faceContainer = document.getElementById("faceContainer")

//this function creates a clock face
const makeClock = () => {
//create face
    const clockFace = document.createElement("div")
    clockFace.setAttribute("id", "clockFace")
    faceContainer.appendChild(clockFace)
//create hour hand
    const hourHand = document.createElement("div")
    hourHand.setAttribute("id", "hourHand")
    clockFace.appendChild(hourHand)
//create minute hand
    const minuteHand = document.createElement("div")
    minuteHand.setAttribute("id", "minuteHand")
    clockFace.appendChild(minuteHand)
//create second hand
    const secondHand = document.createElement("div")
    secondHand.setAttribute("id", "secondHand")
    clockFace.appendChild(secondHand)
}



let secondCount = 1
let minuteCount = 0
let hourCount = 0
//functions to set degree based on second, minute, hour
const secSpot = (secNum) => {
    return ((secNum / 60) * 360)
}

const minSpot = (secNum, minNum) => {
    return ((secSpot(secNum) / 60) + secSpot(minNum))
}

const hrSpot = (secNum, minNum, hrNum) => {
    return (secSpot(minNum) / 60) + ((hrNum / 12) * 360)
    // return (((secSpot(secNum) / 60) /60) +(secSpot(minNum) / 60) + (hrNum / 12) * 360)
}


//function sets position of each hand based on number of seconds, minutes, and hours  (-1.8deg just to match clock image better)
const rotPerSecond = () => {
    if (secondCount === 60){
        minuteCount++
        secondCount = 0;
    };
    if (minuteCount === 60){
        hourCount++
        minuteCount = 0;
    };
    if (hourCount === 12){
        hourCount === 0;
    };
    const secondDeg = secSpot(secondCount) - 1.8
    const minuteDeg = minSpot(secondCount, minuteCount) - 1.8
    const hourDeg = hrSpot(secondCount, minuteCount, hourCount) -1.8

    document.getElementById("secondHand").style.transform = "rotate(" + secondDeg + "deg)";
    document.getElementById("minuteHand").style.transform = "rotate(" + minuteDeg + "deg)";
    document.getElementById("hourHand").style.transform = "rotate(" + hourDeg + "deg)";
    secondCount++;

}

//A function that makes the clock and starts it rotating per second
const startClock = () => {
    makeClock()
    window.clockInterval = setInterval(rotPerSecond, 1000)
}


startButton.addEventListener("click", startClock, { once: true })

const stopClock = () => {
    clearInterval(clockInterval)
}

stopButton.addEventListener("click", stopClock, { once: true })



// //determine start position based on real time
// const setClock = () => {
//     let date = new Date()
//     let nowTime = [date.getHours(), date.getMinutes(), date.getSeconds()]
// //hours should set hand to hr/12 * 360
// //minutes should set hand to minutes/60 * 360
//     let secondDeg = 



// }
