
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let cardEL = document.getElementById("card");
let sumEL = document.getElementById("sum");
let playerChips = 0;
function startgame()
{
    isAlive = true;
    let fn =  getRandomCard();
    let sn =  getRandomCard();
    cards = [fn, sn];
    sum = fn + sn;
    rendergame();
}
function rendergame()
{
    cardEL.innerText = " ";
    for(let i=0;i<cards.length;i++)
    {
        cardEL.textContent += cards[i] + " ";
    }
    sumEL.textContent = sum;
    if(sum<21)
{
    message = "Do you want to draw a new card? ";
}
else if(sum === 21)
{
    message = "Wooooooooooo! You got Blackjack!!";
    playerChips += 100;
    hasBlackJack = true;
}
else
{
    message = "You are out of the game!!:(";
    isAlive = false;
}
document.getElementById("point").textContent = playerChips;
document.getElementById("message-el").textContent = message;
hasBlackJack = false;
}
function newcard()
{
    if(isAlive === true && hasBlackJack === false)
    {
        console.log("Drawing a new card from deck!!");
        let tn = getRandomCard();
        sum += tn;
        cards.push(tn);
        rendergame();
    }
}
function getRandomCard()
{
    let rand = Math.floor(Math.random()*13)+1;
    if(rand === 1)
    {
        return 11;
    }
    else if(rand>10)
    {
        return 10;
    }
    else
    {
        return rand;
    }
}