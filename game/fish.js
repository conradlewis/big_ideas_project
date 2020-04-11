function move(startPos, endPos, direction)
{
    var pos = startPos;
    var element = document.getElementById("fish");
    element.style.top = '50px';
    
    var id = setInterval(frame, 5);
    
    function frame() 
    {
        if (pos == endPos) 
            clearInterval(id);
        
        else 
        {
            pos += direction;
            element.style.left = pos + 'px';
        }
    }
}