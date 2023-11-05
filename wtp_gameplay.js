// Sets default scores and start time
let playerScore = 0;
let finalScore = 0; 
let timeLeft = 30;

// Array of Petr names and their images
const quiz_bank = [
    {
        image: "0.jpg",
        name: "Baker Petr"
    },
    {
        image: "1.jpg",
        name: "Dark Kermit Petr"
    },
    {
        image: "2.jpg",
        name: "Sally Petr"
    },
    {
        image: "3.jpg",
        name: "Oogie Boogie Petr"
    },
    {
        image: "4.jpg",
        name: "Snorlax Petr"
    },
    {
        image: "5.jpg",
        name: "Seaside Petr"
    },
    {
        image: "6.jpg",
        name: "Homer Petr"
    },
    {
        image: "7.jpg",
        name: "Snoopy Petr"
    },
    {
        image: "8.jpg",
        name: "Abducted Petr"
    },
    {
        image: "9.jpg",
        name: "Spring Day Petr"
    },
    {
        image: "10.jpg",
        name: "Graduation Petr"
    },
    {
        image: "11.jpg",
        name: "Thanos Petr"
    },
    {
        image: "12.jpg",
        name: "Light-Mode Discord Petr"
    },
    {
        image:"13.jpg",
        name: "Family Petr"
    },
    {
        image: "14.jpg",
        name: "Junkrat Petr"
    },
    {
        image: "15.jpg",
        name: "Boots Petr"
    },
    {
        image: "16.jpg",
        name: "Squidward Petr"
    },
    {
        image: "17.jpg",
        name: "SpongePetr SquarePants"
    },
    {
        image: "18.jpg",
        name: "KitKat Petr"
    },
    {
        image: "19.jpg",
        name: "Vanellope Von Schweetz Petr"
    },
    {
        image: "20.jpg",
        name: "Kaito Kid Petr"
    },
    {
        image: "21.jpg",
        name: "Tiny Headed Petr"
    },
    {
        image: "22.jpg",
        name: "Autumn Leaves Petr"
    },
    {
        image: "23.jpg",
        name: "Night Owl Petr"
    },
    {
        image: "24.jpg",
        name: "Goombas Petr"
    },
    {
        image: "25.jpg",
        name: "Kirby Petr"
    },
    {
        image: "26.jpg",
        name: "Grimace Shake Petr"
    },
    {
        image: "27.jpg",
        name: "Olivia Rodrigo Petr"
    },
    {
        image: "28.jpg",
        name: "Kuromi Petr" 
    },
    {
        image: "29.jpg",
        name: "Hello Kitty Petr"
    },
    {
        image: "30.jpg",
        name: "Link Petr"
    },
    {
        image: "31.jpg",
        name: "South Park Petr"
    },
    {
        image: "32.jpg",
        name: "McDonalds Happy Meal Petrs"
    },
    {
        image: "33.jpg",
        name: "Barbie Petr"
    },
    {
        image: "34.jpg",
        name: "Hannie Petr"
    },
    {
        image: "35.jpg",
        name: "Engineering Tower Petr"
    },
    {
        image: "36.jpg",
        name: "Melting Petr"
    },
    {
        image: "37.jpg",
        name: "Unit Circle Petr"
    },
    {
        image: "38.jpg",
        name: "Crazy Petr"
    },
    {
        image: "39.jpg",
        name: "Violent Duck Petr"
    }
]

// Shuffles quiz_bank so that the first four indexes are randomized and can be used as the buttons
// shuffle function from https://stackoverflow.com/a/2450976
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

function newQuestion() {
// Resets page
    document.getElementById('quiz').innerHTML = ""; 

// Shuffles quiz_bank so that the first four indexes are randomized and can be used as the buttons
// Is a shuffled array of the quiz_bank, changed everytime
var shuffledArray = shuffle(quiz_bank);

// Array with 4 random values between 0-40
let random_variables = [];

var newRandom = shuffledArray[0]; 
var newRandom2 = shuffledArray[1]; 
var newRandom3 = shuffledArray[2]; 
var newRandom4 = shuffledArray[3]; 

random_variables.push(newRandom);
random_variables.push(newRandom2);
random_variables.push(newRandom3);
random_variables.push(newRandom4);

// Initially blurs the image
document.getElementById("image").style.filter = "blur(10Px)";

// Sets the current, correct answer to one of the four buttons
var current = random_variables[Math.floor(Math.random() * 3)]; 

document.getElementById("image").innerHTML = `
<image src="imgs/${current.image}"></image>
`; 

// Checks if the button clicked is the correct answer
document.getElementById('quiz').innerHTML += `

<div>
    <div>
     <button onclick="selected(${newRandom == current})">${newRandom.name}</button>
     <button onclick="selected(${newRandom2 == current})">${newRandom2.name}</button>
     <button onclick="selected(${newRandom3 == current})">${newRandom3.name}</button>
     <button onclick="selected(${newRandom4 == current})">${newRandom4.name}</button>

    </div>
</div>
`;

}

// Loads a new screen 
function loaded(){

    newQuestion(); 
    shuffle(quiz_bank);
    let timer = setInterval(function() {
        timeLeft -= 1;
        document.getElementById("timer").innerText = `Time: ${timeLeft}  `;

        if(timeLeft <= 0) {
            clearInterval(timer); 
            endScene(); 
        }
    }, 1000);
}

// Checks if the correct answer is chosen and updates the score by 1
function selected(correct){

    console.log("user seleced correct value",correct)
    if(correct) {
        playerScore+=1;
    } 
    document.getElementById("image").style.filter = "blur(0Px)";
    setTimeout(
        function() {
            updateScore();
            newQuestion(); 
        }, 500); 
   
}

// Loads the end screen
function endScene() {
    localStorage.setItem("score", playerScore); 
    window.location = 'wtp_end_scene.html';
}

// Updates the html of the score to match
function updateScore() {
    document.getElementById("counter").innerText = `Score: ${playerScore}`;
}

// Displays the number of Petrs guessed at the end screen
function endLoad() {
    document.getElementById("finalScore").innerText = `You found ${localStorage.getItem("score")} Petrs!`;
}

