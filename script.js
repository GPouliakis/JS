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


    A3uhsh meiwsei kai reset enos counter
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


    Tuxaioi ari8moi
const myBtn = document.getElementById("myBtn");
const label = document.getElementById("myLabel");

const min = 1;
const max = 100;
let randomNum;

myBtn.onclick = function(){
    randomNum = Math.floor(Math.random() * max) + min;
     label.textContent = randomNum;
}


    EMFANIZEI ENA MHNUMA ME THN HLIKIA TOU XRHSTH
const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age;

mySubmit.onclick = function(){
    age = myText.value;
    age = Number(age);

    if(age >= 100){
        result.textContent = `You are too old to drink`;
    }
    else if(age == 0){
        result.textContent = `You were just born`;
    }
    else if(age >= 18){
        result.textContent = `You can drink`;
    }
    else if(age < 0){
        result.textContent = `Negative age?`;
    }
    else{
        result.textContent = `You can't drink`;
    }
}
*/


 const MyCheckbox= document.getElementById("myCheckbox");
 const visabtn= document.getElementById("visabtn");
 const mastercardbtn= document.getElementById("mastercardbtn");
 const paypalbtn= document.getElementById("paypalbtn");
 const mySubmit= document.getElementById("mySubmit");
 const subResult= document.getElementById("subResult");
 const paymentResult= document.getElementById("paymentResult");

 mySubmit.onclick = function() {

    if(MyCheckbox.checked){
        subResult.textContent = `Pay with card`;
    }
    else{
        subResult.textContent = `You didn't select for card payment`;
    }

    if(visabtn.checked){
        paymentResult.textContent = `You will pay with Visa`;
    }
    else if(mastercardbtn.checked){
        paymentResult.textContent = `You will pay with MasterCard`;
    }
    else if(paypalbtn.checked){
        paymentResult.textContent = `You will pay with PayPal`;
    }else{
        paymentResult.textContent = `Select a payment`;
    }
}
