/*
const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("mytext").value;
    radius = Number(radius);
    circumference = 2 * PI * radius; 
    console.log(circumference);
    document.getElementById("myh3").textContent = circumference + " cm";
}
*/

/* a3uhsh meiwsei kai reset enos counter
const increaseBtn = document.getElementById("increaseBtn");
const ResetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
ResetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
*/

// Tuxaioi ari8moi
const myBtn = document.getElementById("myBtn");
const label = document.getElementById("myLabel");

const min = 1;
const max = 100;
let randomNum;

myBtn.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
     label.textContent = randomNum;
}

