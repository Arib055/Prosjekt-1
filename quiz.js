var questions = [
    "Hvor mange bits står en MAC-adresse av?",
    "Hva brukes RAM til i en datamaskin?",
    "Hvor mange bits er en byte?",
    "Hva er HTML hovedsakelig brukt til?",
    "Hva brukes CSS til på en nettside?"
]

const question = document.getElementById("question")

const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")

const points_display = document.getElementById("points")
const points_system = document.querySelector(".poengsystem")
const reset = document.getElementById("reset")

const answers_list = [
    ["32", "28", "48", "12"],

    [   "Lagring av filer permanent",
        "Midlertidig lagring av data som datamaskinen bruker",
        "Å koble datamaskinen til internett",
        "Å vise bilder på skjermen"],

    ["4", "8", "12", "6"],

    [ "Å lage strukturen på nettsider",
        "Å beskytte datamaskinen mot virus",
        "Å lagre bilder",
        "Å lage databaser"],

    [   "Å lagre informasjon",
        "Å programmere serveren",
        "Å bestemme utseende og stil på nettsiden",
        "Å koble til Wi-Fi"]
]

let current_question = 0
let points = 0
let correct_answers = [2, 1, 1, 0, 2]


function update_questions() {

    question.textContent = questions[current_question]

    option1.textContent = answers_list[current_question][0]
    option2.textContent = answers_list[current_question][1]
    option3.textContent = answers_list[current_question][2]
    option4.textContent = answers_list[current_question][3]

    points_display.textContent = points
}


function answer(a) {

  
    if (a == correct_answers[current_question]) {
        points += 1
    }

    current_question += 1

   
    if (current_question >= questions.length) {

        question.textContent =
            "Quiz ferdig! Du fikk " + points + " av " + questions.length + " poeng."

        points_system.style.display = "none"

        points_display.textContent = points

       
        option1.style.display = "none"
        option2.style.display = "none"
        option3.style.display = "none"
        option4.style.display = "none"

        
        reset.style.display = "block"

    } else {

        update_questions()
    }
}


function resetQuiz() {

      current_question = 0
      points = 0

      points_system.style.display = "block"

    
    option1.style.display = "block"
    option2.style.display = "block"
    option3.style.display = "block"
    option4.style.display = "block"

   
    reset.style.display = "none"

    
    update_questions()
}



update_questions()
