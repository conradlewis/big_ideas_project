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
