function firstfunc()
{
    alert("hi my name is Daniel Plandor!");
}

function average(num1, num2)
{
    var avg = (num1 + num2)/2.0;
    alert("average= " + avg);
}
function playcraprules()
{
    var player1 = math.ceil(math.random()*3);
    var player2 = math.ceil(math.random()*3);
    var num1image = "R.png"
    var num2image = "70798ad2bce9d9af741db9ac29ee9237.png"
    var num3image = "R (1).png"
    document.getElementById("finalResult").innerHTML = "updates"
   

    if (player1 == 1)
    {
        document.getElementById("player1Img").src = num1image;
    }
    else if (player1 == 2)
    {
        document.getElementById("player1Img").src = num2image;
    }
    else
    {
        document.getElementById("player1Img").src = num3image;
    } 
    if (player2 == 1)
        {
            document.getElementById("player2Img").src = num1image;
        }
        else if (player2 == 1)
        {
            document.getElementById("player2Img").src = num2image;
        }
        else
        {
            document.getElementById("player2Img").src = num3image;
        } 

        if (player1 == player2)
        {
            document.getElementById("finalResult").innerHTML = "DRAW";
        }
        if ((player1 == 1 && player2 == 2) || (player1 == 2 && player2 == 3) || (player1 == 3 && player2 == 1) )
        {
            document.getElementById("finalResult").innerHTML = "player1 loses";
        }
        else
        {
            document.getElementById("finalResult").innerHTML = "player1 wins";
        }

}