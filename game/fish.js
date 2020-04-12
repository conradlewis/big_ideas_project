// function move(startPos, endPos, direction)
// {
//     var pos = startPos;
//     var element = document.getElementById("fish");
//     element.style.top = '50px';
    
//     var id = setInterval(frame, 5);
    
//     function frame() 
//     {
//         if (pos == endPos) 
//             clearInterval(id);
        
//         else 
//         {
//             pos += direction;
//             element.style.left = pos + 'px';
//         }
//     }
// }
function move(startPos, endPos)
{
    var direction = 1;
    var pos = startPos;
    var element = document.getElementById("fish");
    element.style.top = '50px';
    element.style.left = '30px';
    
    var id = setInterval(frame, 5);
    
    function frame() 
    {

        if (pos == endPos) 
        {
            direction *= -1;
            var temp = startPos;
            startPos = endPos;
            endPos = temp;
            // clearInterval(id);
        }
        pos += direction;
        element.style.left = pos + 'px';

    }
}