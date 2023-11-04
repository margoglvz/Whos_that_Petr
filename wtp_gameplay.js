// this will make buttons correspond to new answer 
//8 bit petr, pumpkin petr, thanos petr, lucky petr, romantic petr
let playerScore = 0;
let timeLeft = 60;
const quiz_bank = [
    {
        question: "8-bit Petr?",
        answers: [
            {
                text: "8-bit Petr",
                correct: true,
            },
            {
                text: "Termite Petr",
                correct: false,
            },
            {
                text: "Turkey Petr",
                correct: false,
            },
            {
                text: "Zelda Petr",
                correct: false,
            },
        ]
    }, 
    {
        question: "Lucky Petr?",
        answers: [
            {
                text: "Green Petr",
                correct: false,
            },
            {
                text: "Termite Petr",
                correct: false,
            },
            {
                text: "Thanos Petr",
                correct: false,
            },
            {
                text: "Lucky Petr",
                correct: true,
            },
        ]
    },
    {
        question: "Thanos Petr?",
        answers: [
            {
                text: "8-bit Petr",
                correct: false,
            },
            {
                text: "Thanos Petr",
                correct: true,
            },
            {
                text: "Turkey Petr",
                correct: false,
            },
            {
                text: "Zelda Petr",
                correct: false,
            },
        ]
    }
]

function loaded(){
    const current = quiz_bank[Math.floor(Math.random() * 3)];

    document.getElementById('quiz').innerHTML += `
    <div>
        ${current.question}
        <div>
         <button onclick="selected(${current.answers[0].correct})">${current.answers[0].text}</button>
         <button onclick="selected(${current.answers[1].correct})">${current.answers[1].text}</button>
         <button onclick="selected(${current.answers[2].correct})">${current.answers[2].text}</button>
         <button onclick="selected(${current.answers[3].correct})">${current.answers[3].text}</button>

        </div>
    </div>
    `;

    let timer = setInterval(function() {
        timeLeft -= 1;
        document.getElementById("timer").innerText = `Time: ${timeLeft}  `;

        if(timeLeft <= 0) {
            clearInterval(timer)
        }
    }, 1000);
}

function selected(correct){
    console.log("user seleced correct value",correct)
    if(correct) playerScore+=1;
    updateScore();
}

// buttons.forEach(button => button.addEventListener("click", value)) {
//     checkCorrect(value); 
// }

// function checkCorrect() {
//     if (myElement.classList.contains("correct")) {

//     }
//         playerScore += 1; 
//         updateScore(); 
    
// }

function updateScore() {
    document.getElementById("counter").innerText = `Score: ${playerScore}`;
}

//backticks ` are template strings

// add event listener 