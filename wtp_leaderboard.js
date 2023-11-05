users = JSON.parse(localStorage.getItem("users")); 

function addUser() {
    users.push(localStorage.getItem("user")); 
for(let i = 0; i < users.length; i++){
    document.getElementById('board').innerHTML += `<div>${users[i]}</div>`
}

}



