document.addEventListener('click', function mouseClicked(event) 
{
    shakeFood();
});

function shakeFood()
{
    var elem = document.getElementById("fishFood");
    elem.style.top = "10px";
}