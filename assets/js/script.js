var rulesEl = document.getElementById("rules");
var timerEl = document.getElementById("timer");
var scoresEl = document.getElementById("highScores");
var scoreEl = document.getElementById("score")
var answersEl = document.getElementById("answers");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var highScorePage = document.getElementById("hsPage");
var counter = 0;
var scoreCounter = 0;
var time = 5;
var head = document.getElementById("header");
var base = false;
var points = 5;
var leader = document.getElementById("leaderBoard");
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

highScorePage.setAttribute("class","hide")

function scoreBoard (){
    // scoresEl.setAttribute("class","show")
    scoreEl.textContent = "Score: " + scoreCounter;
}

document.getElementById("submit").addEventListener("click", function(e){
    // alert("working")
    var userInitials = document.getElementById("initials").value;
    console.log(userInitials);
})

function nextQuestion(event){
    if (quizQuestion[counter].answer == event.target.value){
        scoreCounter += 15
        console.log(scoreCounter)
    }
    else{
        time -= 15
    }
    counter++;
    if (counter == quizQuestion.length){
        return;
    }
    
    scoreBoard();
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



function highScore(){
    highScorePage.setAttribute("class","show")

}

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
            // alert("time up");
            highScore();
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
