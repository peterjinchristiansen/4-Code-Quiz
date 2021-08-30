var timerEl = document.getElementById('timeLeft');
var headingEl = document.getElementById('quizText');
var startButtonEl = document.getElementById('startButton');
var buttonDivEl = document.getElementById('buttonDiv');
var questionResultDisplayEl = document.getElementById('questionResultDisplay');
var nextButtonDivEl = document.getElementById('nextButtonDiv');

var questions = ['Placeholder', "What does 'i++' mean?", "Which of the following is correct syntax for storing an item into local storage?", "What does 'var El = document.getElementById('#id');' mean?", "Which of the following is the correct syntax for defining a function?", "In the following code: setInterval(function(){}, 1000); what does the '1000' represent?", "What does the following code do: window.onload = function() {}", "What is the purpose of a for loop?", "What is the correct syntax for selecting the 4th item in an array?", "What does the following code do: 'El.appendChild(btn)'?", "What will the following code output: 5%3"];
var responseA = ['Placeholder', "Increments i by 2", "setItem.localStorage('score', score);", "Sets the variable 'El' to the element in HTML with an id of 'id'", "function(myFunction) {}", "The function will run every 1000 milliseconds", "Grabs the function from localStorage when the page loads", "Runs a function indefinitely", "array(4)", "Runs the function El when btn is clicked", "2"];
var responseB = ['Placeholder', "Increments i by 1", "localStorage.setItem('score', score);", "Searches the document for an element with an id of 'El'", "myFunction() {}", "How many times the function will run", "Runs the function everytime something on the page loads", "Runs a function a certain number of times", "array[4]", "Appends El into btn", "8"];
var responseC = ['Placeholder', "Defines the variable 'i'", "localStorage.score('score');", "Puts the contents of the variable onto the body of the HTML page", "function myFunction() {}", "The function will run every 1000 seconds", "Stops the function when the page loads", "Runs a function everytime a button is clicked", "array[3]", "Creates a button called El", "53"];
var responseD = ['Placeholder', "The syntax is incorrect", "score.setItem(localStorage);", "The syntax is incorrect", "function myFunction {}", "The argument for the function", "Runs the function when the page first loads", "Runs a function until a button is clicked", "array.4", "Appends btn into El", "5.3"];
var correctAnswers = ['Placeholder', "Increments i by 1", "localStorage.setItem('score', score);", "The syntax is incorrect", "function myFunction() {}", "The function will run every 1000 milliseconds", "Runs the function when the page first loads", "Runs a function a certain number of times", "array[3]", "Appends btn into El", "2"];

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

        localStorage.setItem('finalScore', finalScore);
        localStorage.setItem('name', name);

        location.href = 'highscores.html';
}}