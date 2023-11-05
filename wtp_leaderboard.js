users = JSON.parse(localStorage.getItem("users")); 
scores = JSON.parse(localStorage.getItem("scores")); 

function addUser() {
    scores.push(localStorage.getItem("score")); 
    users.push(localStorage.getItem("user")); 
for(let i = 0; i < users.length; i++){
    document.getElementById('board').innerHTML += `
    <div>${users[i]}</div>
    <div>${scores[i]}</div>
    `;
}

}

