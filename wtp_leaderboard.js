users = JSON.parse(localStorage.getItem("users")); 
scores = JSON.parse(localStorage.getItem("scores")); 

function addUser() {
    scores.push(localStorage.getItem("score")); 
    users.push(localStorage.getItem("user")); 

    console.log(users); 
    console.log(scores); 
    
    document.getElementById('board').innerHTML += `
    <div>

        <h1>${users[users.length - 1]}</h1>
        <h1>${scores[scores.length - 1]}</h1>

        
    </div>
    `;

}


