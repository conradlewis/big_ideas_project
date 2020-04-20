function move(startPos, endPos, fishID)
{
    var direction = 1;
    var pos = startPos;
   
    var element = document.getElementById(fishID);
        
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
        
        pos +=  direction;
        element.style.left = pos + 'px';
    }
}
// move(5, 940, 'fish2');
move(5, 940, 'fish1');
var direction = 1;

function moveToSpot(fishID, x, y)
{
    var element = document.getElementById(fishID);
    var id = setInterval(frame, 5);
    if (element.style.top == "")
    {
        element.style.top = "360px";
        element.style.left = "6px";
    }
    
    var topBottomPos = parseInt(element.style.top);
    var leftRightPos = parseInt(element.style.left);

    function frame() 
    {
        if(topBottomPos < y && topBottomPos <= 530) 
            topBottomPos += 1;
        else if(topBottomPos > y && topBottomPos >= 0)
            topBottomPos -= 1;
        element.style.top = topBottomPos + 'px';
        // element.style.left = "0px";
        
        const FISH_LENGTH = 80;

        // Makes the fish's face, not its tail, hit the cursor
        if(leftRightPos + FISH_LENGTH < x && leftRightPos <= 940)
        {
            leftRightPos += 1;
            element.style.transform = 'scaleX(1)';
        }
        else if(leftRightPos > x && leftRightPos >= 5)
        {
            leftRightPos -= 1;
            element.style.transform = 'scaleX(-1)';
        }
        
        element.style.left = leftRightPos + 'px';
    }
}

document.addEventListener('click', function printMousePos(event) 
{
    var x = event.clientX;
    var y = event.clientY; 
    // alert('x: ' + x);
    // alert('y: ' + y);
    moveToSpot("fish2", x, y);
});

// function parse(string)
// {
//     var i = 0;
//     while (!(string.substring(i, i + 1) === "p"))
//         i++;
//     return string.substring(0, i);
// }