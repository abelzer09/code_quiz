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


startBtn.addEventListener("click", function () {
    gameStart()
    var gameTimer = setInterval(function () {
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
})