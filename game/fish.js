function swim()
{
    var element = document.getElementById("fish1"); 
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() 
    {
        if (pos == 350) 
        {
            clearInterval(id);
        } 
        
        else 
        {
            element.style.left = pos + 'px';
            element.style.left = pos + 'px'; 
        }
    }
}