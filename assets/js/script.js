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
// var points
var leader = document.getElementById("leaderBoard");
var gameTimer;

inti();

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
    var userInitials = document.getElementById("initials").value;
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
    // if (isWin && time > 0) {
    //     // Clears interval and stops timer
    //     clearInterval(gameTimer);
    //     highScore();
    //   }
    if (counter > 2 || time === 0) {
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
        choices[i].addEventListener("click", nextQuestion)
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
    // var gameTimer = setInterval(function () {
    //     time--;
    //     if (time >= 0) {
    //         var ptag = document.createElement("p");
    //         ptag.textContent = "Time: " + time;
    //         timerEl.innerHTML = "";
    //         timerEl.appendChild(ptag);
    //     } else {
    //         clearInterval(gameTimer);
    //         // alert("time up");
    //         highScore();
    //     }
    // }, 1000);
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
        choices[i].addEventListener("click", nextQuestion)
    }
}


function gameStart() {
    rulesEl.setAttribute("class", "hide")
    questionsEl.setAttribute("class", "show")
}

function inti(){
    scoreCounter = 0;
    questionsEl.setAttribute("class", "hide");
    rulesEl.setAttribute("class", "show");
    highScorePage.setAttribute("class", "hide");
    leader.setAttribute("class", "hide");
    head.setAttribute("class", "show");
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
            highScore();
        }
    }, 1000);
    startQuiz();
})
