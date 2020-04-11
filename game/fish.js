function moveRight() 
{
    var element = document.getElementById("fish1");   
    var pos = 30;
    element.style.top = pos + 'px';

    var id = setInterval(frame, 5);
    
    function frame() 
    {
        if (pos == 880)
        {
            clearInterval(id);
        }
 
        else 
        {
            pos++; 
            element.style.left = pos + 'px'; 
        }
    }
}