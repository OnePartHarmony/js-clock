const stopButton = document.getElementById("stopButton")
const clockButton = document.getElementById("clockButton")
const faceContainer = document.getElementById("faceContainer")

//this function creates a clock face
const makeClock = () => {
//create face
    const clockFace = document.createElement("div")
    clockFace.setAttribute("id", "clockFace")
    faceContainer.appendChild(clockFace)
    console.log(clockFace)
//create numbers
    let twelve = document.createElement("div")
    let three = document.createElement("div")
    let six = document.createElement("div")
    let nine = document.createElement("div")
    twelve.setAttribute("id", "twelve")
    twelve.classList.add("clockNumber")
    three.setAttribute("id", "three")
    three.classList.add("clockNumber")
    six.setAttribute("id", "six")
    six.classList.add("clockNumber")
    nine.setAttribute("id", "nine")
    nine.classList.add("clockNumber")
//create hour hand

//create minute hand

//create second hand


}


clockButton.addEventListener("click", makeClock, { once: true })

