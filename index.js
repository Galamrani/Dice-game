
var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImage1 = "images/dice" + randomNum1 + ".png";
var randomImage2 = "images/dice" + randomNum2 + ".png";

var imgArray = document.querySelectorAll("img");

imgArray[0].setAttribute("src", randomImage1);
imgArray[1].setAttribute("src", randomImage2);


if (randomNum1 > randomNum2)
{
    document.querySelector("h1").innerHTML = "!!Player 1 wins!!"
}
else if (randomNum1 < randomNum2)
{
    document.querySelector("h1").innerHTML = "!!Player 2 wins!!"
}
else
{
    document.querySelector("h1").innerHTML = "!!Its a Draw!!"
}