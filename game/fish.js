function swim(initPos)
{
    var element = document.getElementById("fish1"); 
    var id = setInterval(frame, 5);
    function frame() 
    {
        if (pos == 350) 
        {
            clearInterval(id);
        } 
        
        else 
        {
            element.style.left = initPos + 'px';
            element.style.left = initPos + 'px'; 
        }
    }
}