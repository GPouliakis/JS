/*

// --ektupwse mhnuma--
console.log("Hello");
console.log("Welcome");

// --ektupwse alert--
window.alert("Error 404");

document.getElementById("myh1").textContent = "Gerard"
document.getElementById("myp").textContent = "You lose"

*/

/*
---Metavlites JS---

let firstName = "George";
let age = 23;
let price = 5.99;
let gpa = 8.4;
let isStudent = true;

console.log(typeof price);

console.log(`Your name: ${firstName} `);
console.log(`Your age: ${age}`);
console.log(`The price: ${price}`);
console.log(`Your gpa: ${gpa}`);
console.log(`Is he student?: ${isStudent}`);

let gitName = "GPouliakis";
let age = 23;
let isStudent = true;

document.getElementById("p1").textContent = `Your GitHub Name is ${gitName}`;
document.getElementById("p2").textContent = `Your Age is ${age}`;
document.getElementById("p3").textContent = `Are you Student? ${isStudent}`;

*/

let username;
let password;

document.getElementById("submit").onclick = function (){
    username = document.getElementById("username").value;
    password = document.getElementById("password").value;

    document.getElementById("h1").textContent = `Welcome ${username}`

    console.log(username);
    console.log(password);
    
}
