var highScoreHeadingEl = document.getElementById('highScoreHeading');
var score0 = document.getElementById('1');
var score1 = document.getElementById('2');
var score2 = document.getElementById('3');
var score3 = document.getElementById('4');
var score4 = document.getElementById('5');
var score5 = document.getElementById('6');
var score6 = document.getElementById('7');
var score7 = document.getElementById('8');
var score8 = document.getElementById('9');
var score9 = document.getElementById('10');

window.onload = function() {
    displayHighScores();
}

var newObject = {};
var newArray = [];

function displayHighScores() {
//grabs the array from local storage and changes it into variable newArray
    var newArrayBridge = localStorage.getItem('newArray');
    var newArray = ('newArrayBridge: ', JSON.parse(newArrayBridge));

    console.log(newArray);

//changes the score and name and sets it to newObject, then pushes the object to newArray
    var myScore = parseInt(localStorage.getItem('finalScore'));
    var myName = localStorage.getItem('name');
    highScoreHeadingEl.innerHTML = "Your most recent score was: " + myScore;
    newObject.name = myName;
    newObject.score = myScore;
    newArray.push(newObject);

//sorts the array by score in descending order
    newArray.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));

    score0.innerHTML = newArray[0].score + " (" + newArray[0].name + ")"
    score1.innerHTML = newArray[1].score + " (" + newArray[1].name + ")"
    score2.innerHTML = newArray[2].score + " (" + newArray[2].name + ")"
    score3.innerHTML = newArray[3].score + " (" + newArray[3].name + ")"
    score4.innerHTML = newArray[4].score + " (" + newArray[4].name + ")"
    score5.innerHTML = newArray[5].score + " (" + newArray[5].name + ")"
    score6.innerHTML = newArray[6].score + " (" + newArray[6].name + ")"
    score7.innerHTML = newArray[7].score + " (" + newArray[7].name + ")"
    score8.innerHTML = newArray[8].score + " (" + newArray[8].name + ")"
    score9.innerHTML = newArray[9].score + " (" + newArray[9].name + ")"
    
    localStorage.setItem('newArray', JSON.stringify(newArray));
}