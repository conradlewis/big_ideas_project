var angle = 90;
setInterval(frame, 5)
var elem = document.getElementById("fishFood");
elem.ondrag = produceFood();

function frame()
{
   
    elem.style.transform = "rotate(" + angle + "deg";
    angle = (angle + 0.25) % 360;
}

document.addEventListener('click', function mouseClicked(event) 
{
    shakeFood();
});

function shakeFood()
{
    
}

function dragContainer()
{

}

function produceFood()
{

}