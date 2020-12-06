function drawDice(){
    var randomNumber1 = Math.floor(Math.random()*6+1);
var randomNumber2 = Math.floor(Math.random()*6+1);

var str1 = "images/dice"+randomNumber1+".png";
var str2 = "images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",str1);
document.querySelectorAll("img")[1].setAttribute("src",str2);

document.querySelectorAll("p")[0].style.color = "#4ecca3";
document.querySelectorAll("p")[1].style.color = "#4ecca3";

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML = "DRAW";
    document.querySelectorAll("p")[1].style.color = "red";
    document.querySelectorAll("p")[0].style.color = "red";
}else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").style.fontSize="7rem";
    document.querySelector("h1").innerHTML = "Player 1 Wins !";
    document.querySelectorAll("p")[0].style.color = "red";
}else{
    document.querySelector("h1").innerHTML = "Player 2 Wins !";
    document.querySelector("h1").style.fontSize="7rem";
    document.querySelectorAll("p")[1].style.color = "red";
}
}