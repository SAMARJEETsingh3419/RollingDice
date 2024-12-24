var random_1=Math.floor(Math.random()*6)+1;
var random_dice_1 = ("./diceimg/dice"+random_1+".png");
var random_dice_img1=document.querySelectorAll("img")[0];
random_dice_img1.setAttribute("src", random_dice_1);

var random_2=Math.floor(Math.random()*6)+1;
var random_dice_2 = ("./diceimg/dice"+random_2+".png");
var random_dice_img2=document.querySelectorAll("img")[1];
random_dice_img2.setAttribute("src", random_dice_2);

if(random_1>random_2)
{
    document.querySelector("h1").innerHTML="<u>Player 1 wins</u>!!"
}

else if(random_1<random_2)
{
    document.querySelector("h1").innerHTML="<u>Player 2 wins</u>!!"
}

else
{
    document.querySelector("h1").innerHTML="<u>Draw</u>!!"
}