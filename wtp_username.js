let username = "marly";
let users = ["Brian", "Candance"]; 
localStorage.setItem("users", JSON.stringify(users)); 

function makeBoard() {
    username = document.getElementById("entered_name").value; 
    localStorage.setItem("user", username); 
}
