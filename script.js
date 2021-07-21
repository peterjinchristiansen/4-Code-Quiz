var h1 = document.getElementById("h1-tag");
var h2 = document.getElementById("h2-tag");
var h5 = document.getElementById("result");
var nextButton = document.getElementById("next");
 
var title = ["Placeholder", "Question 1", "Question 2", "Question 3", "Question 4", "Question 5", "Question 6", "Question 7", "Question 8", "Question 9", "Question 10", ];
var questions = ["Placeholder", "[Question 1]", "[Question 2]", "[Question 3]", "[Question 4]", "[Question 5]", "[Question 6]", "[Question 7]", "[Question 8]", "[Question 9]", "[Question 10]"];
var responseA = ["Placeholder", "[q1r1]", "[q2r1]", "[q3r1]", "[q4r1]", "[q5r1]", "[q6r1]", "[q7r1]", "[q8r1]", "[q9r1]", "[q10r1]"];
var responseB = ["Placeholder", "[q1r2]", "[q2r2]", "[q3r2]", "[q4r2]", "[q5r2]", "[q6r2]", "[q7r2]", "[q8r2]", "[q9r2]", "[q10r2]"];
var responseC = ["Placeholder", "[q1r3]", "[q2r3]", "[q3r3]", "[q4r3]", "[q5r3]", "[q6r3]", "[q7r3]", "[q8r3]", "[q9r3]", "[q10r3]"];
var responseD = ["Placeholder", "[q1r4]", "[q2r4]", "[q3r4]", "[q4r4]", "[q5r4]", "[q6r4]", "[q7r4]", "[q8r4]", "[q9r4]", "[q10r4]"];
var correctResponse = ["Placeholder", "[q1r1]", "[q2r2]", "[q3r2]", "[q4r1]", "[q5r4]", "[q6r1]", "[q7r2]", "[q8r1]", "[q9r1]", "[q10r3]", ]
 
var num = 1;
score = 0;
 
 
function startQuiz() {
//remove the start quiz button
    var removeDummy = document.getElementById("dummy");
    removeDummy.remove();
//change the h1 and h2 html tags to the question number and question
    h1.innerHTML = title[num];
    h2.innerHTML = questions[num];
//create buttons and give them bootstrap and onclick functions, appending them to empty divs
    var responseOne = document.createElement("button");
    responseOne.innerHTML = responseA[num];
    responseOne.onclick = responseIsA;
    responseOne.classList.add("btn");
    responseOne.classList.add("btn-primary");
    document.getElementById("button1").appendChild(responseOne);
    var responseTwo = document.createElement("button");
    responseTwo.innerHTML = responseB[num];
    responseTwo.onclick = responseIsB;
    responseTwo.classList.add("btn");
    responseTwo.classList.add("btn-danger");
    document.getElementById("button2").appendChild(responseTwo);
    var responseThree = document.createElement("button");
    responseThree.innerHTML = responseC[num];
    responseThree.onclick = responseIsC;
    responseThree.classList.add("btn");
    responseThree.classList.add("btn-warning");
    document.getElementById("button3").appendChild(responseThree);
    var responseFour = document.createElement("button");
    responseFour.innerHTML = responseD[num];
    responseFour.onclick = responseIsD;
    responseFour.classList.add("btn");
    responseFour.classList.add("btn-success");
    document.getElementById("button4").appendChild(responseFour);
}
 
function responseIsA() {
    var myResponse = responseA[num];
    changeScore(myResponse);
}
 
function responseIsB() {
    var myResponse = responseB[num];
    changeScore(myResponse);
}
 
function responseIsC() {
    var myResponse = responseC[num];
    changeScore(myResponse);
}
 
function responseIsD() {
    var myResponse = responseD[num];
    changeScore(myResponse);
}
 
 
 
function changeScore(myResponse) {
    if(myResponse == correctResponse[num]) {
        score = score + 1;
        h5.innerHTML = "Correct! :3 Score: " + score;
    } else {
        h5.innerHTML = "Incorrect :( Score: " + score;
    }
    var createNextButton = document.createElement("next");
    createNextButton.innerHTML = "Next";
    createNextButton.onclick = continueQuiz;
    createNextButton.classList.add("btn");
    createNextButton.classList.add("btn-success");
    nextButton.appendChild(createNextButton);
}
 
function continueQuiz() {
    nextButton.remove();
    h5.innerHTML = "Score: " + score;
    num = num + 1;
    h1.innerHTML = title[num];
    h2.innerHTML = questions[num];
    button1.innerHTML = "<button class=\"btn btn-primary\" onclick=\"responseIsA()\">" + responseA[num] + "</button>"
    button2.innerHTML = "<button class=\"btn btn-danger\" onclick=\"responseIsB()\">" + responseB[num] + "</button>"
    button3.innerHTML = "<button class=\"btn btn-warning\" onclick=\"responseIsC()\">" + responseC[num] + "</button>"
    button4.innerHTML = "<button class=\"btn btn-success\" onclick=\"responseIsD()\">" + responseD[num] + "</button>"
}
 

