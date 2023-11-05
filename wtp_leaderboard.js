
let list = localStorage.getItem("usernames"); 

console.log(list); 

function addUser() {
    document.getElementById('board').innerHTML += `

<div>
    <div class="name">${list[list.length - 1]}</div>
</div>
`;

}

// ${list[-1]}