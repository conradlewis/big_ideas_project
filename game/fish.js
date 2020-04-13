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
        
        pos += direction;
        element.style.left = pos + 'px';
    }
}
// move(5, 940, 'fish2');
move(5, 940, 'fish1');

function moveToMouse(fishID, mouseX, mouseY)
{
    var element = document.getElementById(fishID);
    if (element.style.top == "")
        element.style.top = "360px";
    
    var topBottomPos = parseInt(element.style.top);
    var leftRightPos = parseInt(element.style.left);
    
    var id = setInterval(frame, 5);
    
    function frame() 
    {
        if(topBottomPos < mouseY && topBottomPos <= 530) 
            topBottomPos += 1;
        else if(topBottomPos > mouseY && topBottomPos >= 0)
            topBottomPos -= 1;
        
        element.style.top = topBottomPos + 'px';
        element.style.left = "0px";
        
        if(leftRightPos < mouseX && leftRightPos <= 940)
        {
            leftRightPos += 1;
        }
        else if(leftRightPos > mouseX && leftRightPos >= 5)
        {
            leftRightPos -= 1;
            element.style.transform = 'scaleX(-1)';
        }
        
        element.style.left = leftRightPos + 'px';
    }
}

//mouse clicking works; moveToMouse doesn't
document.addEventListener('click', function printMousePos(event) 
{
    var x = event.clientX;
    var y = event.clientY; 
    // alert('x: ' + x);
    // alert('y: ' + y);
    moveToMouse("fish2", x, y);
});

function parse(string)
{
    var i = 0;
    while (!(string.substring(i, i + 1) === "p"))
        i++;
    return string.substring(0, i);
}