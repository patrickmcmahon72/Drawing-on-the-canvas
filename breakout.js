//Setup the canvas
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Set the starting point
var x = canvas.width/2;
var y = canvas.height-30;
var ballRadius = 10;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

var dx = 2;
var dy = -2;

if(y + dy < 0){
	dy = -dy;
}

if(y + dy > canvas.height){
	dy = -dy;
}

function drawPaddle() {
	ctx.beginPath();
	ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

//Draw the ball
function drawBall()	{
	ctx.beginPath();
	ctx.arc(x, y, ballRadius, 0, Math.PI*2);
	ctx.fillStyle = "#0095DD";
	ctx.fill();
	ctx.closePath();
}

function draw()
{
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBall();
	x += dx;
	y += dy;
	
	if(y + dy > canvas.height || y + dy < 0){
	dy = -dy;
}
	
	if(x + dx > canvas.width || x +dx < 0){
	dx = -dx;
	}
	
	if(x + dx > canvas.width-ballRadius || x + dx < ballRadius){
	dx = -dx;
}

if(y + dy > canvas.height-ballRadius || y + dy < ballRadius){
	dy = -dy;
}

if(rightPressed && paddleX < canvas.width-paddleWidth) {
	paddleX += 7;
}
else if(leftPressed && paddleX > 0) {
	paddleX -= 7;
}
}


document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = true;
	}
	else if(e.keyCode == 37) {
		leftPressed = true;
	}
}

function keyUpHandler(e) {
	if(e.keyCode == 39) {
		rightPressed = false;
	}
	else if(e.keyCode == 37) {
		leftPressed = false;
	}
}

if(rightPressed) {
	paddleX += 7;
}
else if (leftPressed) {
	paddleX -= 7;
}

setInterval(draw, 10);

