import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  generaterandomcard ()
  document.querySelector("#cardButton").addEventListener("click", generaterandomcard)
 
  // console.log("Hello Rigo from the console!");
};
const generaterandomcard = () => {
const cardColors = document.querySelector(".top")
const cardColorstwo = document.querySelector(".bottom")
let icon = ["♠","♥","♦","♣"];
let number = ["A","K","Q","J","10","9","8","7","6","5","4","3","2"];

let iconIndex = Math.floor(Math.random() * icon.length)
let numberIndex = Math.floor(Math.random() * number.length)

let randomicon = icon[iconIndex]
let randomnumber = number[numberIndex]

if (randomicon == "♥" || randomicon == "♦") {
  cardColors.style.color = "red"
  cardColorstwo.style.color = "red"
}
else {
  cardColors.style.color = "black"
  cardColorstwo.style.color = "black"
}

cardColors.innerHTML = randomicon
document.querySelector(".number").innerHTML = randomnumber
cardColorstwo.innerHTML = randomicon
}
