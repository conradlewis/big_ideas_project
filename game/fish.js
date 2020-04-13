function move(startPos, endPos, fishID)
{
    var direction = 1;
    var pos = startPos;
   
    var element = document.getElementById(fishID);
        
    var id = setInterval(frame, -1);
    
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

function moveToMouse(fishID, mouseX, mouseY)
{
    var element = document.getElementById(fishID);
    if (element.style.top == "")
        element.style.top = "360px";

    if (element.style.top == "")
        element.style.left = "6px";
    
    var topBottomPos = parseInt(element.style.top);
    var leftRightPos = parseInt(element.style.left);
    
    setInterval(frame, 5);

    function frame() 
    {
        const HALF_FISH_HEIGHT = 20;

        // The middle of the fish should hit the cursor, not the top. Adding half of the fish's height to the starting position solves this.
        if(topBottomPos + HALF_FISH_HEIGHT < mouseY && topBottomPos <= 530) 
            topBottomPos += 1;
        else if(topBottomPos > mouseY && topBottomPos >= 0)
            topBottomPos -= 1;
        
        element.style.top = topBottomPos + 'px';
        element.style.left = "0px";
        
        const FISH_LENGTH = 78;

        // The fish's face, not its tail, should hit the cursor when moving forward. Subtracting the length of the fish from the intended X destination solves this.  
        if(leftRightPos < mouseX - FISH_LENGTH && leftRightPos <= 940)
        {
            leftRightPos += 1;
            element.style.transform = 'scaleX(1)';
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