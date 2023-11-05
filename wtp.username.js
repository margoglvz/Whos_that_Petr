let username = "";
let users = ["Brian", "Candance"]; 

function initializeBoard() {
    username = document.getElementById("entered_name"); 
}

localStorage.setItem("user", username); 

console.log(users); 