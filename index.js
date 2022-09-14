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



//functions to determine to what position each hand should be rotated each second
const secondRotation = (second) => {
    return (second / 60) * 360
}

const minuteRotation = (second) => {
    return ((second / 60) /60) *360
}

const hourRotation = (second) => {
    return (((second / 60) /60) /60) *360
}

//function rotates each hand per second (-1.8deg just to match clock image better)
let secondCount = 1
const rotPerSecond = () => {
    if (secondCount === 360){
        secondCount = 0
    }
    let secondDeg = secondRotation(secondCount) - 1.8
    let minuteDeg = minuteRotation(secondCount) - 1.8
    let hourDeg = hourRotation(secondCount) - 1.8

    document.getElementById("secondHand").style.transform = "rotate(" + secondDeg + "deg)"
    document.getElementById("minuteHand").style.transform = "rotate(" + minuteDeg + "deg)"
    document.getElementById("hourHand").style.transform = "rotate(" + hourDeg + "deg)"
    secondCount++
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

