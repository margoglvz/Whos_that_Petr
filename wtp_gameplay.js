// this will make buttons correspond to new answer 
//8 bit petr, pumpkin petr, thanos petr, lucky petr, romantic petr
let playerScore = 0;
let timeLeft = 60;
const quiz_bank = [
    {
        question: "Shrek Petr?",
        answers: [
            {
                text: "Shrek Petr",
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
        ],
        image: "https://ih1.redbubble.net/image.3546877029.0615/st,small,507x507-pad,600x600,f8f8f8.jpg"
    }, 
    {
        question: "Bob Ross Petr?",
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
                text: "Bob Ross Petr",
                correct: true,
            },
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRQUmMj8WqDBrqra-IovGTsDES6mOf8ehhuQ&usqp=CAU"
    },
    {
        question: "Ursula Petr?",
        answers: [
            {
                text: "8-bit Petr",
                correct: false,
            },
            {
                text: "Ursula Petr",
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
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-_iTDXCF9kQtL4PTabmtp_M8-QDom0x_rw&usqp=CAU"
    }
]

function newQuestion() {
    document.getElementById('quiz').innerHTML = ""; 
    const current = quiz_bank[Math.floor(Math.random() * 3)];

document.getElementById("image").innerHTML = `
<image src="${current.image}"></image>
`; 


document.getElementById('quiz').innerHTML += `

<div>
    <div>
     <button onclick="selected(${current.answers[0].correct})">${current.answers[0].text}</button>
     <button onclick="selected(${current.answers[1].correct})">${current.answers[1].text}</button>
     <button onclick="selected(${current.answers[2].correct})">${current.answers[2].text}</button>
     <button onclick="selected(${current.answers[3].correct})">${current.answers[3].text}</button>

    </div>
</div>
`;

}


function loaded(){

    newQuestion(); 

    let timer = setInterval(function() {
        timeLeft -= 1;
        document.getElementById("timer").innerText = `Time: ${timeLeft}  `;

        if(timeLeft <= 0) {
            clearInterval(timer)
        }
    }, 1000);
}

function clearQuestion() {
    document.getElementById("${questionNumber}").innerHTML += ""; 
}

function selected(correct){
    console.log("user seleced correct value",correct)
    if(correct) {
        playerScore+=1;
    } 

    updateScore();
    newQuestion(); 
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