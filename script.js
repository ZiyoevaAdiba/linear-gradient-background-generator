var color_1 = document.querySelector(".color1");
var color_2 = document.querySelector(".color2");
var css = document.querySelector("h3");
var body = document.getElementById("gradient");
var button = document.querySelector("button");


function setGradient() {
    a = "linear-gradient(to right, " + color_1.value +", "+ color_2.value +")";
    body.style.background = a;
    css.textContent = a;
    button.style.background = a;
}
window.onload = setGradient();

function randomGradient() {
    color_1.value = "#" + Math.floor(Math.random()*0xFFFFFF<<0).toString(16);
    color_2.value = "#" + Math.floor(Math.random()*0xFFFFFF<<0).toString(16);
    setGradient();
}

color_1.addEventListener("input", setGradient);
color_2.addEventListener("input", setGradient);
button.addEventListener("click",randomGradient);
