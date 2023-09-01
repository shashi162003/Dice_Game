
var temp1, temp2;
var i = 1, j = 1;
while (i) {
    var n1 = Math.random();
    n1 *= 100;
    n1 += 1;
    if (Math.floor(n1) < 7) {
        temp1 = Math.floor(n1);
        i = 0;
    }
}
while (j) {
    var n2 = Math.random();
    n2 *= 100;
    n2 += 1;
    if (Math.floor(n2) < 7) {
        temp2 = Math.floor(n2);
        j = 0;
    }
}
if (temp1 === 1) {
    document.querySelector(".img1").src = "./images/dice1.png";
}
else if (temp1 === 2) {
    document.querySelector(".img1").src = "./images/dice2.png";
}
else if (temp1 === 3) {
    document.querySelector(".img1").src = "./images/dice3.png";
}
else if (temp1 === 4) {
    document.querySelector(".img1").src = "./images/dice4.png";
}
else if (temp1 === 5) {
    document.querySelector(".img1").src = "./images/dice5.png";
}
else if (temp1 === 6) {
    document.querySelector(".img1").src = "./images/dice6.png";
}

if (temp2 === 1) {
    document.querySelector(".img2").src = "./images/dice1.png";
}
else if (temp2 === 2) {
    document.querySelector(".img2").src = "./images/dice2.png";
}
else if (temp2 === 3) {
    document.querySelector(".img2").src = "./images/dice3.png";
}
else if (temp2 === 4) {
    document.querySelector(".img2").src = "./images/dice4.png";
}
else if (temp2 === 5) {
    document.querySelector(".img2").src = "./images/dice5.png";
}
else if (temp2 === 6) {
    document.querySelector(".img2").src = "./images/dice6.png";
}

if(temp1>temp2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!!";
}
else if(temp2>temp1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!!";
}
else{
    document.querySelector("h1").innerHTML = "It's a draw!!";

}