var timerEl = document.getElementById('timeLeft');
var headingEl = document.getElementById('quizText');
var startButtonEl = document.getElementById('startButton');
var buttonDivEl = document.getElementById('buttonDiv');
var questionResultDisplayEl = document.getElementById('questionResultDisplay');
var nextButtonDivEl = document.getElementById('nextButtonDiv');

var questions = ['Placeholder', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9', 'q10'];
var responseA = ['Placeholder', 'q1r1', 'q2r1', 'q3r1', 'q4r1', 'q5r1', 'q6r1', 'q7r1', 'q8r1', 'q9r1', 'q10r1'];
var responseB = ['Placeholder', 'q1r2', 'q2r2', 'q3r2', 'q4r2', 'q5r2', 'q6r2', 'q7r2', 'q8r2', 'q9r2', 'q10r2'];
var responseC = ['Placeholder', 'q1r3', 'q2r3', 'q3r3', 'q4r3', 'q5r3', 'q6r3', 'q7r3', 'q8r3', 'q9r3', 'q10r3'];
var responseD = ['Placeholder', 'q1r4', 'q2r4', 'q3r4', 'q4r4', 'q5r4', 'q6r4', 'q7r4', 'q8r4', 'q9r4', 'q10r4'];
var correctAnswers = ['Placeholder', 'q1r2', 'q2r2', 'q3r4', 'q4r3', 'q5r1', 'q6r4', 'q7r2', 'q8r3', 'q9r4', 'q10r1'];

startButtonEl.onclick = startTimer;

var currentQuestion = 0;
var timeLeft = 300;

function startTimer() {
    setInterval(function(){
        timerEl.innerHTML = "Time Left: " + timeLeft;
        timeLeft--;
    }, 1000)
    
    startFunction();
}

function startFunction() {
    buttonDivEl.innerHTML = "";
    currentQuestion++;
    headingEl.innerHTML = "Question " + currentQuestion + ": " + questions[currentQuestion];
    var btn1 = document.createElement("button");
    btn1.innerHTML = responseA[currentQuestion];
    btn1.className = "responseButton";
    btn1.onclick = answeredResponseA;
    buttonDivEl.appendChild(btn1);
    var btn2 = document.createElement("button");
    btn2.innerHTML = responseB[currentQuestion];
    btn2.className = "responseButton";
    btn2.onclick = answeredResponseB;
    buttonDivEl.appendChild(btn2);
    var btn3 = document.createElement("button");
    btn3.innerHTML = responseC[currentQuestion];
    btn3.className = "responseButton";
    btn3.onclick = answeredResponseC;
    buttonDivEl.appendChild(btn3);
    var btn4 = document.createElement("button");
    btn4.innerHTML = responseD[currentQuestion];
    btn4.className = "responseButton";
    btn4.onclick = answeredResponseD;
    buttonDivEl.appendChild(btn4);
}

function answeredResponseA() {
    if(responseA[currentQuestion] === correctAnswers[currentQuestion]) {
        questionResultDisplayEl.innerHTML = "Previous Question: Correct :)"
    } else {
        questionResultDisplayEl.innerHTML = "Previous Question: Incorrect :("
        timeLeft = timeLeft - 15;
    }
    checkQuestionNumber();
}

function answeredResponseB() {
    if(responseB[currentQuestion] === correctAnswers[currentQuestion]) {
        questionResultDisplayEl.innerHTML = "Previous Question: Correct :)"
    } else {
        questionResultDisplayEl.innerHTML = "Previous Question: Incorrect :("
        timeLeft = timeLeft - 15;
    }
    checkQuestionNumber();
}

function answeredResponseC() {
    if(responseC[currentQuestion] === correctAnswers[currentQuestion]) {
        questionResultDisplayEl.innerHTML = "Previous Question: Correct :)"
    } else {
        questionResultDisplayEl.innerHTML = "Previous Question: Incorrect :("
        timeLeft = timeLeft - 15;
    }
    checkQuestionNumber();
}

function answeredResponseD() {
    if(responseD[currentQuestion] === correctAnswers[currentQuestion]) {
        questionResultDisplayEl.innerHTML = "Previous Question: Correct :)"
    } else {
        questionResultDisplayEl.innerHTML = "Previous Question: Incorrect :("
        timeLeft = timeLeft - 15;
    }
    checkQuestionNumber();
}

function checkQuestionNumber() {
    if (currentQuestion < 10) {
        startFunction();
    } else {
        var finalScore = timeLeft;
        var name = prompt("Please enter your name")
        location.href = 'highscores.html';
        localStorage.setItem('finalScore', finalScore);
        localStorage.setItem('name', name);
}}