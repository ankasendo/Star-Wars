// constant variables for highscore 
const highScoresList=document.getElementById('highScoresList');
const highScoresFinal = JSON.parse(localStorage.getItem('highScores')) || [];

// Adds a leaderboard 
highScoresList.innerHTML =
highScoresFinal.map(score=>{
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join('');