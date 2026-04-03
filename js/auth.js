function login(){

let username=document.getElementById("username").value
let password=document.getElementById("password").value

let user = AUTH_USERS.find(
u => u.username === username && u.password === password
)

if(user){

localStorage.setItem("loggedIn","true")
localStorage.setItem("role",user.role)

window.location="dashboard.html"

}else{

document.getElementById("loginMessage").innerText="Invalid credentials"

}

}

function logout(){

localStorage.removeItem("loggedIn")
localStorage.removeItem("role")

window.location="index.html"

}

if(
window.location.pathname.includes("dashboard") ||
window.location.pathname.includes("policies") ||
window.location.pathname.includes("reports")
){

if(localStorage.getItem("loggedIn") !== "true"){

window.location="index.html"

}

}