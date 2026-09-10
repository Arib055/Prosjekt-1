var questions = [
     "Hvor mange bits står en MAC-adresse av?",
     "Hvor mange bits er en byte?",
     "?",
     "?",
     "?"
]

function runQuiz() {
    console.log('')
}

const question = document.getElementById("question")

question.textContent = questions[0]




const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")
const option4 = document.getElementById("option4")
const option5 = document.getElementById("option5")

const points_display = document.getElementById("points")
const answers_list = [
   ["32","28","48","12"],
   ["4","6","12","8"],
   ["?","?","?","?"],
   ["?","?","?","?"]
]
 
let current_question = 0
let points = 0
let correct_answers = [2,2,1]
function update_questions(){
   question.textContent = questions[current_question]
   option1.textContent = answers_list[current_question][0]
   option2.textContent = answers_list[current_question][1]
   option3.textContent = answers_list[current_question][2]
   option4.textContent = answers_list[current_question][3]
   option5.textContent = answers_list[current_question][4]
   points_display.textContent = points
}
function answer(a){
   if (a == correct_answers[current_question]){
       points += 1
   }
   current_question += 1
   update_questions()
}
update_questions()
 