let mcq = [
    question1 = {
        question: "Holi Festival is also known as.?",
        firstOption: "Festival of Doves",
        secondOption: "Festival of Love",
        thirdOption: "Festival of Victory",
        correctOption: "Festival of Love"
    },
    question2 = {
        question: "What is the demon that was burnt that lead to the Festival Holi.?",
        firstOption: "Malika",
        secondOption: "Jarika",
        thirdOption: "Holika",
        correctOption: "Holika"
    },
    question3 = {
        question: "Which day is Chhoti Holi.?",
        firstOption: "Next day of Holi",
        secondOption: "Before Day of Holi",
        thirdOption: "Same day as Holi",
        correctOption: "Before Day of Holi"
    },
    question4 = {
        question: "What are the other names for Holi.?",
        firstOption: "Dhuleti, Dhulandi",
        secondOption: "Rangawali Holi",
        thirdOption: "All the above",
        correctOption: "All the above"
    },
    question5 = {
        question: "What is the other country that celebrates the Indian Festival Holi.?",
        firstOption: "Srilanka",
        secondOption: "China",
        thirdOption: "Nepal",
        correctOption: "Nepal"
    },
    question6 = {
        question: "Holika is the sister of which demon king.?",
        firstOption: "Ravanasura",
        secondOption: "Hiranyakashyapa",
        thirdOption: "Vibhishana",
        correctOption: "Hiranyakashyapa"
    },
    question7 = {
        question: "Holi is celebrated in which Hindu Month.?",
        firstOption: "Falgun",
        secondOption: "Chaitra",
        thirdOption: "Baishakhi",
        correctOption: "Falgun"
    },
    question8 = {
        question: "What are the natural colours used for Holi in olden days.?",
        firstOption: "Turmeric",
        secondOption: "Kumkum",
        thirdOption: "All the above",
        correctOption: "All the above"
    },
    question9 = {
        question: "What was the plot of Devil Holika.?",
        firstOption: "Push Prahlada into fire to kill him",
        secondOption: "Make Prahlada sit on a Pyre (Combustible material)",
        thirdOption: "Fight with Prahlada with a fire stick",
        correctOption: "Make Prahlada sit on a Pyre (Combustible material)"
    },
    question10 = {
        question: "Who saves Prahlada caught inside fire with pyre.?",
        firstOption: "Lord Krishna",
        secondOption: "Lord Shiva",
        thirdOption: "Lord Vishnu",
        correctOption: "Lord Vishnu"
    },
    ]

targetQuestion = document.getElementById("question")
targetFirst = document.getElementById("first")
targetSecond = document.getElementById("second")
targetThird = document.getElementById("third")

targetQuestion.innerText = mcq[0].question
targetFirst.innerText = mcq[0].firstOption
targetSecond.innerText = mcq[0].secondOption
targetThird.innerText = mcq[0].thirdOption
let questionNumber = 0
let score = 0 
let checkAnswerExecuted = false;
function makeSimpleState(){
    targetQuestion.style.backgroundColor = "orange"
    targetFirst.style.backgroundColor = "yellow"
    targetSecond.style.backgroundColor = "yellow"
    targetThird.style.backgroundColor = "yellow"
}

function changeQuestion() {
    makeSimpleState()
    questionNumber += 1
    if(questionNumber == 10){
        document.getElementById("finalScore").innerText = "Your Final Score"
        document.getElementById("thankyou").innerText = "Thank You!"
        document.getElementById("score").innerText = score + "/40"
    }
    targetQuestion.innerText = mcq[questionNumber].question
    targetFirst.innerText = mcq[questionNumber].firstOption
    targetSecond.innerText = mcq[questionNumber].secondOption
    targetThird.innerText = mcq[questionNumber].thirdOption
    checkAnswerExecuted = false // because question is changed so we want to execute checkAnswer function again
    document.getElementById("score").innerText = score + "/40"
    document.getElementById("qn").innerText = questionNumber + 1 + "/10"
}
function checkAnswer(clicked){
    if(checkAnswerExecuted == false){
        let clickedOption = clicked.innerText
        let correct = mcq[questionNumber].correctOption
        
        if ( clickedOption == correct ){
         score = score + 4
            clicked.style.backgroundColor = "green"
        }
        else{
            score = score - 1
            clicked.style.backgroundColor = "red"
            }
    }
    checkAnswerExecuted = true ;

}
function viewscore(){
    document.getElementById("finalScore").innerText = score + "/40"
}
