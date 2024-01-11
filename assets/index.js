var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;

var randomImg1="./assets/images/dice"+randomNumber1+".png";
var randomImg2="./assets/images/dice"+randomNumber2+".png";

document.querySelectorAll("img")[0].setAttribute("src",randomImg1);
document.querySelectorAll("img")[1].setAttribute("src",randomImg2);

if (randomNumber1>randomNumber2) {
    document.querySelector(".head").innerHTML="🚩Player1 Wins";
}
else if(randomNumber2>randomNumber1) {
    document.querySelector(".head").innerHTML="Player2 Wins🚩";
}