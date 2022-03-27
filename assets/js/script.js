var rulesEl = document.getElementById("rules");
var timerEl = document.getElementById("timer");
var scoresEl = document.getElementById("scores");
var answersEl = document.getElementById("answers");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var counter = 0;
var scoreCounter = 0;
var time = 5;
var head = document.getElementById("header");
var base = false;
var points = 15;
var quizQuestion = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choices:["javescript", "script", "scripting", "js"], 
        answer: "script"
    },{
        
            question: "question2",
            choices:["a", "b", "c", "d"], 
            answer: "d"
        
    },{
        
        question: "question3",
        choices:["a", "b", "c", "d"], 
        answer: "c"
    
}];

function startQuiz() {
    var gameTimer = setInterval(function() {
        time--;
        if (time >= 0) {
            var ptag = document.createElement("p");
            ptag.textContent = "Time: " + time;
            timerEl.innerHTML = "";
            timerEl.appendChild(ptag);
        } else {
            clearInterval(gameTimer);
            alert("time up");
        }
    }, 1000);
    gameStart();
    questionsEl.innerHTML = `
    <h3>${quizQuestion[counter].question}</h3>
    <button class="choices" value="${quizQuestion[counter].choices[0]}">${quizQuestion[counter].choices[0]}</button>
    <button class="choices" value="${quizQuestion[counter].choices[1]}">${quizQuestion[counter].choices[1]}</button>
    <button class="choices" value="${quizQuestion[counter].choices[2]}">${quizQuestion[counter].choices[2]}</button>
    <button class="choices" value="${quizQuestion[counter].choices[3]}">${quizQuestion[counter].choices[3]}</button>
    `;
    var choices =  document.querySelectorAll(".choices")
    for (var i=0; i < choices.length; i++){
        choices[i].addEventListener("click",nextQuestion)
    }
}


function gameStart() {
    if (rulesEl.style.display === "none") {
        rulesEl.style.display = "block";
    } else {
        rulesEl.style.display = "none";
    }
    if (startBtn.style.display === "none") {
        startBtn.style.display = "block";
    } else {
        startBtn.style.display = "none";
    }
}


startBtn.addEventListener("click", startQuiz)
