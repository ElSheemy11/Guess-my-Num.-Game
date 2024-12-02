// Varaibles
let numBtn = document.querySelector(".num")
let label1 = document.getElementById("fir")
let check = document.querySelector(".check")
let section = document.querySelector("section")
let fScore = document.getElementById("score")
let score = fScore.innerText
let initScore = fScore.innerText
let fHighScore = document.querySelector("#highScore")
let highScore = localStorage.getItem("highScore") ? parseInt(localStorage.getItem("highScore")) : 0;
let againBtn = document.querySelector(".again")
let reset = document.querySelector(".reset")

// Loading the High Score from localStorage
fHighScore.innerText = highScore;

// Randomizing
function getRandomInt (min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
let RandomNum = getRandomInt(1, 100)


// Check
check.addEventListener("click", () => {
    
    let num = numBtn.value
    
    section.classList.remove("correct")
    section.classList.remove("red")
    section.classList.remove("orange")
    
    if (num > (RandomNum + 10)){
        label1.innerText="Very High!"
        label1.style.color = "Red"
        section.classList.add("red")
        score--
    } else if (num > RandomNum ) {
        label1.innerText="Slightly High"
        label1.style.color = "Orange"
        section.classList.add("orange")
        score--;
    }else if (num < (RandomNum - 10)){
        label1.innerText="Very Low! "
        label1.style.color = "Red"
        section.classList.add("red")
        score--;
    } else if (num < RandomNum ) {
        label1.innerText="Slightly Low"
        label1.style.color = "Orange"
        section.classList.add("orange")
        score--;
    } else if (num == RandomNum) {
        label1.innerText="You Are There!"
        label1.style.color = "Green"
        section.classList.add("correct")
        check.disabled = true;
        againBtn.style.display = "block"
        if (score > highScore) {
            highScore = score
            fHighScore.innerText=highScore
            
            // Saving The HighScore to localStorage
            localStorage.setItem("highScore",highScore);
            fHighScore.innerText = highScore
        }
    }

    // Set Score
    fScore.innerText=score
    
    // Disable Check btn
    if (score <= 0) {
        score = 0
         label1.style.color = "Red"
        section.classList.add("red")
        label1.innerText = "Game Over! :("
        check.disabled = true;
        againBtn.style.display="block"
    }
    
})
// Again-BTN
againBtn.addEventListener("click", () => {
    RandomNum = getRandomInt(1, 100)
    section.classList.remove("correct")
    label1.style.color = "white"
    section.classList.remove("red")
    section.classList.remove("orange")
    label1.innerText="Start Guessing!"
    score = initScore
    fScore.innerText = score
    check.disabled = false;
    setTimeout(() => {
        againBtn.style.display = "none"
    }, 2000)  
})
// Reset Btn
reset.addEventListener("click", () => {
    localStorage.clear()
    fHighScore.innerText=0
})