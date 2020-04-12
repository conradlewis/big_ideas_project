function move(startPos, endPos)
{
    var direction = 1;
    var pos = startPos;
   
    var element = document.getElementById("fish1");
        
    var id = setInterval(frame, 5);
    
    function frame() 
    {
        if (pos == endPos) 
        {
            direction *= -1;
            var string = 'scaleX(' + direction + ')'
            element.style.transform = string;
            
            var temp = startPos;
            startPos = endPos;
            endPos = temp;
        }
        
        pos += direction;
        element.style.left = pos + 'px';
    }
}