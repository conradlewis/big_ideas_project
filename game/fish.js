setInterval(frame, 5)
var a = 10;
//(5, 5) is pretty much (0, 0)
//top left corner goes to (932, 508)
var fish1_pos = [5, 5];
var fish2_pos = [5, 200];
var fish1_vel = [1, .8];
var fish2_vel = [1, .5];

function frame()
{
    // console.log("this is a test " + a);
    a = a + 1;

    checkBorders();
    move();

    setPosition("fish1", fish1_pos[0], fish1_pos[1]);
    setPosition("fish2", fish2_pos[0], fish2_pos[1]);
}

function setPosition(fishID, x, y)
{
    var element = document.getElementById(fishID);
    element.style.left = x +"px";
    element.style.top = y + "px";
}

function move()
{
	fish1_pos[0] += fish1_vel[0];
    fish1_pos[1] += fish1_vel[1];
    fish2_pos[0] += fish2_vel[0];
    fish2_pos[1] += fish2_vel[1];
}

function checkBorders(element)
{
	if(fish1_pos[0] + fish1_vel[0] > 943)
	{
		fish1_vel[0] *= -1;
		document.getElementById("fish1").style.transform = 'scaleX(-1)';
	}
	else if(fish1_pos[0] + fish1_vel[0] < 5)
	{
		fish1_vel[0] *= -1;
		document.getElementById("fish1").style.transform = 'scaleX(1)';
	}
	if(fish1_pos[1] + fish1_vel[1] > 508 || fish1_pos[1] + fish1_vel[1] < 5)
		fish1_vel[1] *= -1;

	if(fish2_pos[0] + fish2_vel[0] > 943)
	{
		fish2_vel[0] *= -1;
		document.getElementById("fish2").style.transform = 'scaleX(-1)';
	}
	else if(fish2_pos[0] + fish2_vel[0] < 5)
	{
		fish2_vel[0] *= -1;
		document.getElementById("fish2").style.transform = 'scaleX(1)';
	}
	if(fish2_pos[1] + fish2_vel[1] > 508 || fish2_pos[1] + fish2_vel[1] < 5)
		fish2_vel[1] *= -1;
}

document.addEventListener('click', function mouseClicked(event) 
{
    fish1_vel[0] = (event.clientX - fish1_pos[0])/150;
    fish1_vel[1] = (event.clientY - fish1_pos[1])/150;

    if(event.clientX < fish1_pos[0])
    	document.getElementById("fish1").style.transform = 'scaleX(-1)';
    else
    	document.getElementById("fish1").style.transform = 'scaleX(1)';
});

// function move(startPos, endPos, fishID)
// {
//     var direction = 1;
//     var pos = startPos;
   
//     var element = document.getElementById(fishID);
        
//     var id = setInterval(frame, 5);
    
//     function frame() 
//     {
//         if (pos == endPos) 
//         {
//             direction *= -1;
//             var string = 'scaleX(' + direction + ')'
//             element.style.transform = string;
            
//             var temp = startPos;
//             startPos = endPos;
//             endPos = temp;
//         }
        
//         pos +=  direction;
//         element.style.left = pos + 'px';
//     }
// }
// // move(5, 940, 'fish2');
// move(5, 940, 'fish1');
// var direction = 1;

// function moveToSpot(fishID, x, y)
// {
//     var element = document.getElementById(fishID);
//     var id = setInterval(frame, 5);
//     if (element.style.top == "")
//     {
//         element.style.top = "360px";
//         element.style.left = "6px";
//     }
    
//     var topBottomPos = parseInt(element.style.top);
//     var leftRightPos = parseInt(element.style.left);

//     function frame() 
//     {
//         if(topBottomPos < y && topBottomPos <= 530) 
//             topBottomPos += 1;
//         else if(topBottomPos > y && topBottomPos >= 0)
//             topBottomPos -= 1;
//         element.style.top = topBottomPos + 'px';
//         // element.style.left = "0px";
        
//         const FISH_LENGTH = 80;

//         // Makes the fish's face, not its tail, hit the cursor
//         if(leftRightPos + FISH_LENGTH < x && leftRightPos <= 940)
//         {
//             leftRightPos += 1;
//             element.style.transform = 'scaleX(1)';
//         }
//         else if(leftRightPos > x && leftRightPos >= 5)
//         {
//             leftRightPos -= 1;
//             element.style.transform = 'scaleX(-1)';
//         }
        
//         element.style.left = leftRightPos + 'px';
//     }
// }

// document.addEventListener('click', function printMousePos(event) 
// {
//     while (moving == false && event.clientX < 940 && event.clientY < 530) 
//     {
//         //   clearInterval(id);
//         var x = event.clientX;
//         var y = event.clientY;
//         // alert('x: ' + x);
//         // alert('y: ' + y);
//         moveToSpot("fish2", x, y);
//       }
// });

// // function parse(string)
// // {
// //     var i = 0;
// //     while (!(string.substring(i, i + 1) === "p"))
// //         i++;
// //     return string.substring(0, i);
// // }