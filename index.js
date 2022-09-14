const startButton = document.getElementById("startButton")
const stopButton = document.getElementById("stopButton")
const faceContainer = document.getElementById("faceContainer")
const message = document.getElementById("message")

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


//variables to set starting time1 second
let secondCount = 0
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
    return (minNum * 0.5) + ((hrNum / 12) * 360)
}

//determine start position based on real time
//function sets position of each hand based on number of seconds, minutes, and hours  (-1.8deg just to match clock image better)
const setClock = () => {
    let date = new Date()
    let nowTime = [date.getHours(), date.getMinutes(), date.getSeconds()]
    secondCount = nowTime[2]
    minuteCount = nowTime[1]
    hourCount = nowTime[0]

    const secondDeg = secSpot(secondCount) - 1.8
    const minuteDeg = minSpot(secondCount, minuteCount) - 1.8
    const hourDeg = hrSpot(secondCount, minuteCount, hourCount) -1.8

    document.getElementById("secondHand").style.transform = "rotate(" + secondDeg + "deg)"
    document.getElementById("minuteHand").style.transform = "rotate(" + minuteDeg + "deg)"
    document.getElementById("hourHand").style.transform = "rotate(" + hourDeg + "deg)"   
}


//a function for the stop button to stop the clock and make the start button work again.
const stopClock = () => {
    clearInterval(clockInterval)
    startButton.addEventListener("click", restartClock, { once: true })
    startButton.innerText = "Restart Clock"
    message.innerText = "A stopped clock is right twice a day."
}

//A function that makes the clock and starts it rotating per second, starting at real time, and sets up the stop button
const startClock = () => {
    makeClock()
    setClock()
    window.clockInterval = setInterval(setClock, 1000)
    stopButton.addEventListener("click", stopClock, { once: true })
    message.innerText = "The time is now:"
}

const restartClock = () => {
    setClock()
    window.clockInterval = setInterval(setClock, 1000)
    stopButton.addEventListener("click", stopClock, { once: true })
    message.innerText = "The time is now:"
}


startButton.addEventListener("click", startClock, { once: true })








