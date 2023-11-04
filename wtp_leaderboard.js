//leadre

function newQuestion() {
    document.getElementById('quiz').innerHTML = ""; 
    const current = quiz_bank[Math.floor(Math.random() * 3)];
document.getElementById("image").style.filter = "brightness(0%)"; 
document.getElementById("image").innerHTML = `
<image src="${current.image}"></image>
`; 


document.getElementById('board').innerHTML += `

<div>
    <div class="name">Player</div>
    <div class="score">Score</div>
</div>
`;

}