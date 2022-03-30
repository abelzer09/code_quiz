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
var scoresarr = [];

// checks for stored highscores
if (localStorage.getItem("highscores")) {
    scoresarr = JSON.parse(localStorage.getItem("highscores"))
}

// calls funtion that loads default state of page
inti();

// array of questions for quiz 
var quizQuestion = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices: ["Javascript", "Script", "Scripting", "js"],
        answer: "Script"
    }, {

        question: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
        choices: ["Scope", "JSON", "Syntax", "Output"],
        answer: "Syntax"

    }, {

        question: "In JavaScript, what element is used to store and manipulate text usually in multiples?",
        choices: ["Strings", "Variables", "Functions", "Arrays"],
        answer: "Strings"

    }, {

        question: "What is a JavaScript element that represents either TRUE or FALSE values?",
        choices: ["Event", "RegExp", "Boolean", "Condition"],
        answer: "Boolean"

    }, {

        question: "What is considered to be the most popular programming language in the world?",
        choices: ["Javascript", "HTML", "Swift", "Juby"],
        answer: "Javascript"

    },];


// function to reset game to default display values
function resetGame() {
    scoreBoard();
    inti();
}

// Displays highscore board
scoresEl.addEventListener("click", function () {
    questionsEl.setAttribute("class", "hide")
    rulesEl.setAttribute("class", "hide")
    highScorePage.setAttribute("class", "hide")
    leader.setAttribute("class", "show")
    head.setAttribute("class", "show")
})

// fuction to display players score
function scoreBoard() {
    scoreEl.textContent = "Score: " + scoreCounter;
}

//brings player back to homescreen
document.getElementById("backBtn").addEventListener("click", function () {
    scoreCounter = 0;
    time = 0;
    resetGame()
});

// saves players scores in leader board
document.getElementById("submit").addEventListener("click", function (e) {
    // alert("working")
    e.preventDefault()
    var userInitials = document.getElementById("initials").value;
    var userData = {
        initials: userInitials,
        score: scoreCounter,
    }
    scoresarr.push(userData)
    localStorage.setItem("highscores", JSON.stringify(scoresarr));

    leader.setAttribute("class", "show")
    highScorePage.setAttribute("class", "hide")
    for (var i = 0; i < scoresarr.length; i++) {
        var li = document.createElement("li")
        li.innerText = `${scoresarr[i].initials}:${scoresarr[i].score}`
        leader.appendChild(li)
    }
})

//function to move from question to question
function nextQuestion(event) {
    if (counter + 1 == quizQuestion.length) {
        highScore();
        clearInterval(gameTimer)
        return;
    }
    if (quizQuestion[counter].answer == event.target.value) {
        scoreCounter += 15
    }
    else {
        time -= 15
    }
    counter++;


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
        newFunction(choices, i);
    }
}


//funtion to toggle displayed content on leader board
function highScore() {
    highScorePage.setAttribute("class", "show")
    questionsEl.setAttribute("class", "hide")
}

//function to begin quiz
function startQuiz() {
    gameTimer = setInterval(function () {
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
    isWin = false;
    counter = 0;
    scoreCounter = 0;
    time = 60;
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

//toggles display for playing game
function gameStart() {
    timerEl.setAttribute("class", "show")
    scoresEl.setAttribute("class", "hide")
    scoreEl.setAttribute("class", "show")
    rulesEl.setAttribute("class", "hide")
    questionsEl.setAttribute("class", "show")
}

//funtion for default home screen display
function inti() {
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

//begins the game
startBtn.addEventListener("click", startQuiz)   