var rulesEl = document.getElementById("rules");
var timerEl = document.getElementById("timer");
var scoresEl = document.getElementById("highScores");
var scoreEl = document.getElementById("score")
var answersEl = document.getElementById("answers");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var highScorePage = document.getElementById("hsPage");
var counter;
var scoreCounter;
var time;
var head = document.getElementById("header");
var isWin = false;
var point = JSON.parse(localStorage.getItem("points"))
var leader = document.getElementById("leaderBoard");
var gameTimer;
var player = document.getElementById("initials")

inti();

// function resetScore() {

// }

var quizQuestion = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["javescript", "script", "scripting", "js"],
        answer: "script"
    }, {

        question: "question2",
        choices: ["a", "b", "c", "d"],
        answer: "d"

    }, {

        question: "question3",
        choices: ["a", "b", "c", "d"],
        answer: "c"

    }];

function setPoints(){
    localStorage.setItem("points", scoreCounter);
}    

function resetGame() {
    scoreBoard();
    inti();
}

scoresEl.addEventListener("click", function(){
    questionsEl.setAttribute("class", "hide")
    rulesEl.setAttribute("class", "hide")
    highScorePage.setAttribute("class", "hide")
    leader.setAttribute("class", "show")
    head.setAttribute("class", "show")
})

function scoreBoard() {
    scoreEl.textContent = "Score: " + scoreCounter;
}

document.getElementById("backBtn").addEventListener("click", function(){
    scoreCounter = 0;
    time = 0;
    resetGame()
});

document.getElementById("submit").addEventListener("click", function (e) {
    // alert("working")
    e.preventDefault()
    var userInitials = document.getElementById("initials").value;
    localStorage.setItem("player", userInitials);
    leader.setAttribute("class", "show")
    highScorePage.setAttribute("class", "hide")

    console.log(userInitials);
})

function nextQuestion(event) {
    if (quizQuestion[counter].answer == event.target.value) {
        scoreCounter += 15
        console.log(scoreCounter)
    }
    else {
        time -= 15
    }
    counter++;
    if (counter > 2 || time === 0) {
        setPoints();
        highScore();
        clearInterval(gameTimer);
    }

    scoreBoard();
    questionsEl.innerHTML = `
    <h3>${quizQuestion[counter].question}</h3>
    <button class="choices" value="${quizQuestion[counter].choices[0]}">${quizQuestion[counter].choices[0]}</button>
    <button class="choices" value="${quizQuestion[counter].choices[1]}">${quizQuestion[counter].choices[1]}</button>
    <button class="choices" value="${quizQuestion[counter].choices[2]}">${quizQuestion[counter].choices[2]}</button>
    <button class="choices" value="${quizQuestion[counter].choices[3]}">${quizQuestion[counter].choices[3]}</button>
    `;
    var choices = document.querySelectorAll(".choices")
    for (var i = 0; i < choices.length; i++) {
        newFunction(choices,i);
    }
}



function highScore() {
    highScorePage.setAttribute("class", "show")
    questionsEl.setAttribute("class", "hide")
}

function startQuiz() {
    isWin = false;
    counter = 0;
    scoreCounter = 0;
    time = 5;
    gameStart();
    questionsEl.innerHTML = `
    <h3>${quizQuestion[counter].question}</h3>
    <button class="choices" value="${quizQuestion[counter].choices[0]}">${quizQuestion[counter].choices[0]}</button>
    <button class="choices" value="${quizQuestion[counter].choices[1]}">${quizQuestion[counter].choices[1]}</button>
    <button class="choices" value="${quizQuestion[counter].choices[2]}">${quizQuestion[counter].choices[2]}</button>
    <button class="choices" value="${quizQuestion[counter].choices[3]}">${quizQuestion[counter].choices[3]}</button>
    `;
    var choices = document.querySelectorAll(".choices")
    for (var i = 0; i < choices.length; i++) {
        newFunction(choices, i);
    }
}


function newFunction(choices, i) {
    choices[i].addEventListener("click", nextQuestion);
}

function gameStart() {
    timerEl.setAttribute("class", "show")
    scoresEl.setAttribute("class", "hide")
    scoreEl.setAttribute("class", "show")
    rulesEl.setAttribute("class", "hide")
    questionsEl.setAttribute("class", "show")
}

function inti(){
    scoreCounter = 0;
    timerEl.setAttribute("class", "hide");
    scoresEl.setAttribute("class", "show");
    questionsEl.setAttribute("class", "hide");
    rulesEl.setAttribute("class", "show");
    highScorePage.setAttribute("class", "hide");
    leader.setAttribute("class", "hide");
    head.setAttribute("class", "show");
    scoreEl.setAttribute("class", "hide")
}

startBtn.addEventListener("click", function(){
    var gameTimer = setInterval(function () {
        time--;
        if (time >= 0) {
            var ptag = document.createElement("p");
            ptag.textContent = "Time: " + time;
            timerEl.innerHTML = "";
            timerEl.appendChild(ptag);
        } else {
            clearInterval(gameTimer);
            // alert("time up");
            setPoints();
            highScore();
        }
    }, 1000);
    startQuiz();
})
