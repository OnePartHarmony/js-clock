const stopButton = document.getElementById("stopButton")
const clockButton = document.getElementById("clockButton")
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

//make second hand rotate per second

//make minute hand rotate per minute

//make hour hand rotate per hour






stopButton.addEventListener("click", makeClock, { once: true })

