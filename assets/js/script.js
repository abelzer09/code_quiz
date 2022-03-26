var rulesEl = document.getElementById("rules");
var timerEl = document.getElementById("timer");
var scoresEl = document.getElementById("scores");
var answersEl = document.getElementById("answers");
var startBtn = document.getElementById("start");
var questionsEl = document.getElementById("questions");
var counter = 0;
var score = 0;
var time = 5;
var head = document.getElementById("header");


startBtn.addEventListener("click",function(){
    var gameTimer = setInterval(function(){
        time--;
        if (time >= 0) {
            var ptag = document.createElement("p");
            ptag.textContent = "Time: " + time;
            timerEl.innerHTML = "";
            timerEl.appendChild(ptag);
        }else{
            clearInterval(gameTimer);
            alert("time up");
        }
    }, 1000);
})