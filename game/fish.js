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

function moveToMouse(fishID, mouseX, mouseY)
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
        const HALF_FISH_HEIGHT = 0;

        // The middle of the fish should hit the cursor, not the top. Adding half of the fish's height to the starting position solves this.
        //deleted HALF_FISH_HEIGHT for now
        if(topBottomPos + HALF_FISH_HEIGHT < mouseY && topBottomPos <= 530) 
            topBottomPos += 1;
        else if(topBottomPos + HALF_FISH_HEIGHT > mouseY && topBottomPos >= 0)
            topBottomPos -= 1;
        else if(topBottomPos + HALF_FISH_HEIGHT == mouseY)
            clearInterval(id);
        element.style.top = topBottomPos + 'px';
        // element.style.left = "0px";
        
        const FISH_LENGTH = 0;

        // The fish's face, not its tail, should hit the cursor when moving forward. Subtracting the length of the fish from the intended X destination solves this.  
        //deleted FISH_LENGTH for now
        if(leftRightPos - FISH_LENGTH < mouseX && leftRightPos <= 940)
        {
            leftRightPos += 1;
            element.style.transform = 'scaleX(1)';
        }
        else if(leftRightPos - FISH_LENGTH > mouseX && leftRightPos >= 5)
        {
            leftRightPos -= 1;
            element.style.transform = 'scaleX(-1)';
        }
        else if(leftRightPos - FISH_LENGTH == mouseX)
            clearInterval(id);
        
        element.style.left = leftRightPos + 'px';
    }
}

document.addEventListener('click', function printMousePos(event) 
{
    var x = event.clientX;
    var y = event.clientY; 
    // alert('x: ' + x);
    // alert('y: ' + y);
    moveToMouse("fish2", x, y);
});

// function parse(string)
// {
//     var i = 0;
//     while (!(string.substring(i, i + 1) === "p"))
//         i++;
//     return string.substring(0, i);
// }