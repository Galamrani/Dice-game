


document.querySelector(".btn").addEventListener("click", function () {

    let randomNum1 = Math.floor(Math.random() * 6) + 1;
    let randomNum2 = Math.floor(Math.random() * 6) + 1;

    setRandomImg(randomNum1, randomNum2);
    setWinnerHeader(randomNum1, randomNum2);

});

function setRandomImg(num1, num2)
{ 
    let randomImage1 = "images/dice" + num1 + ".png";
    let randomImage2 = "images/dice" + num2 + ".png";

    let imgArray = document.querySelectorAll("img");

    imgArray[0].setAttribute("src", randomImage1);
    imgArray[1].setAttribute("src", randomImage2);
}

function setWinnerHeader(num1, num2)
{
    if (num1 > num2)
    {
        document.querySelector("h1").innerHTML = "!!Player 1 wins!!"
    }
    else if (num1 < num2)
    {
        document.querySelector("h1").innerHTML = "!!Player 2 wins!!"
    }
    else
    {
        document.querySelector("h1").innerHTML = "!!Its a Draw!!"
    }
}
