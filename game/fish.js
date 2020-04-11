var movingRight = true;
var movingLeft = false;
function move(goRight, goLeft)
{
    if(movingRight)
    {
        moveRight(goRight);
    }
    if(movingLeft)
    {
        moveLeft(goLeft);
    }

}
function moveRight(startPos) 
{
    var pos = startPos;
    var element = document.getElementById("fish");
    element.style.top = pos + 'px';
    
    var id = setInterval(frame, 5);
    
    function frame() 
    {
        if (pos == 880) 
        {
            clearInterval(id);
            movingRight = false;
            movingLeft = true;
        }
        
        else 
        {
            pos++;
            element.style.left = pos + 'px';
        }
    }
}
function moveLeft(startPos2) 
{
    var pos2 = startPos2;
    var element = document.getElementById("fish");
    element.style.top = pos2 + 'px';
    element.style.right = pos2 + 'px';
    
    var id = setInterval(frame, 5);
    
    function frame() 
    {
        if (pos2 == 880) 
        {
            clearInterval(id);
            movingLeft = false;
            movingRight = true;
        }
        
        else 
        {
            pos2++;
            element.style.right = pos2 + 'px';
        }
    }
}