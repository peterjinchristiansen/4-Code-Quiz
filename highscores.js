var highScoreHeadingEl = document.getElementById('highScoreHeading');

window.onload = function() {
    displayHighScores();
}

var officialHighScores = [];

function displayHighScores() {
    var myHighScore = parseInt(localStorage.getItem('finalScore'));
    highScoreHeadingEl.innerHTML = "Your most recent score was: " + myHighScore;
    officialHighScores.push(myHighScore);
    officialHighScores.sort(function(a, b){return a - b});
}

