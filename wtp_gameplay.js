// this will make buttons correspond to new answer 
//8 bit petr, pumpkin petr, thanos petr, lucky petr, romantic petr
let playerScore = 0;
let finalScore = 0; 
let timeLeft = 10;


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
        image: "https://static.vecteezy.com/system/resources/previews/024/997/217/non_2x/cute-animal-doll-with-transparent-background-generate-ai-free-png.png"
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
        image: "https://subtleasiantreats.com/cdn/shop/products/H50b66cb7cf424e928d80db9bc4d0d0611__2_-removebg-preview_500x.png?v=1654587892"
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
        image: "https://i.pinimg.com/originals/8a/5f/58/8a5f58fef2a331b5ee853dcdb313190d.png"
    }
]

function newQuestion() {
    document.getElementById('quiz').innerHTML = ""; 
    const current = quiz_bank[Math.floor(Math.random() * 3)];
document.getElementById("image").style.filter = "brightness(0%)"; 
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
            clearInterval(timer); 
            endScene(); 
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
    document.getElementById("image").style.filter = "blur(0px)"; 
    setTimeout(
        function() {
            updateScore();
            newQuestion(); 
        }, 500); 
   
}

function endScene() {
    localStorage.setItem("score", playerScore); 
    window.location = 'wtp_end_scene.html';
}

function updateScore() {
    document.getElementById("counter").innerText = `Score: ${playerScore}`;
}

function endLoad() {
    document.getElementById("finalScore").innerText = `You found ${localStorage.getItem("score")} Petrs!`;
}

