"use strict";

const meetButtons = document.querySelectorAll(".meetPage");

// meetButtons[0].addEventListener("click", () => window.location.reload());
// meetButtons[1].addEventListener("click", () => window.location.reload());
// meetButtons[2].addEventListener("click", () => window.location.reload());


const prices0 = document.querySelectorAll(".price")[0];
const prices1 = document.querySelectorAll(".price")[1];
const prices2 = document.querySelectorAll(".price")[2];

const grams0 = document.querySelectorAll(".pp")[0];
const grams1 = document.querySelectorAll(".pp")[1];
const grams2 = document.querySelectorAll(".pp")[2];



function changePrice0 (){
    window.location.reload();
    prices0.innerHTML = grams0.value;
}


grams0.addEventListener("change", changePrice0);

function changePrice1 (){
    prices1.innerHTML = grams1.value;
}


grams1.addEventListener("change", changePrice1);

function changePrice2 (){
    prices2.innerHTML = grams2.value;
}


grams2.addEventListener("change", changePrice2);