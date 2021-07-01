var cvs= document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var snakeW = 10;
var snakeH = 10;
var dir= "right";
var score=0;
var gameover=false;
var Timer;
var speed= 9;
function drawSnake(x,y){
	
ctx.fillStyle = "white";
//ctx.fillRect(x coordinate spcae, y coordinate, width,height)
var b=ctx.fillRect(x*snakeW,y*snakeH, snakeW, snakeH);
ctx.fillStyle = "black";
ctx.strokeRect(x*snakeW,y*snakeH, snakeW, snakeH);

}

//create snake

var len = 4;
snake = [];

for ( var i = len-1 ; i>=0 ;i--)
{
	snake.push({
		x:i,
		y:0
	})
}
document.addEventListener("keydown",dirControl);
function dirControl(e)
{
	if(e.keyCode==37 && dir!="right")
	{
		dir="left";
	}
	else if(e.keyCode==38&& dir!="down")
	{
		dir="up";
	}
	else if(e.keyCode==39 && dir!="left")
	{
		dir="right";
	}
	else if(e.keyCode==40 && dir!="up")
	{
		dir="down";
	}
}
 var food = { x: Math.round(Math.random()*(cvs.width/snakeW-1)+1),
 y: Math.round(Math.random()*(cvs.width/snakeH-1)+1)
            
 }
  function drawFood(x,y)
  {
	 ctx.fillStyle = "red";
//ctx.fillRect(x coordinate spcae, y coordinate, width,height)
ctx.fillRect(x*snakeW,y*snakeH, snakeW, snakeH);
ctx.fillStyle = "black";
ctx.strokeRect(x*snakeW,y*snakeH, snakeW, snakeH); 
  }
  function draw(){
	ctx.clearRect(0,0,cvs.width,cvs.height);
	  
  for( var i=0; i<snake.length; i++)
{
	var X = snake[i].x;
	var Y = snake[i].y;
	var c=drawSnake(X,Y);
	
}
drawFood(food.x,food.y)
    

// snake head
  var snakeX = snake[0].x;
  var snakeY = snake[0].y;
  function gameOver()
  {
  ctx.fillStyle="white";
	  ctx.font="50px verdana";
	  var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
	  gradient.addColorStop("0","magenta");
	  gradient.addColorStop("0.5","blue");
	  gradient.addColorStop("1.0","red");
	  ctx.fillStyle=gradient;
	  ctx.fillText("Game Over!",canvas.width/6.5,canvas.height/2);
	 
	  
	  
	  
  }
  function snakeScore()
  {
	  ctx.fillStyle="white";
	  ctx.font="15px verdana";
	  ctx.fillText("score:"+score, 435,15);
  }
  
  if(snakeX<0 || snakeY<0|| snakeX>=cvs.width/snakeW || snakeY>=cvs.height/snakeH)
  {
	  gameover=true;
	  
	  gameOver();
	  clearInterval(Timer);
	 
	  
  }
  
 	
  
  for( var i=2;i<snake.length ; i++)
  {
  var part = snake[i];
if(part.x === snakeX && part.y== snakeY)
{
	alert("gameover");
	gameover=true;
	
	ctx.fillStyle="black";
	ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.fillStyle="white";
	  ctx.font="50px verdana";
	  var gradient = ctx.createLinearGradient(0,0,canvas.width,0);
	  gradient.addColorStop("0","magenta");
	  gradient.addColorStop("0.5","blue");
	  gradient.addColorStop("1.0","red");
	  ctx.fillStyle=gradient;
	  ctx.fillText("Game Over!",canvas.width/6.5,canvas.height/2);
	 
	clearInterval(Timer);
	

	
	break;
	
}
	
  }
  
  
  
  if(dir=="right")
  {
	   snakeX++;
  }
  else if(dir=="left")
  {
	  snakeX--;
  }
  else if (dir=="up")
  {
	  snakeY--;
  }
  else if(dir=="down")
  {
	  snakeY++;
  }
  if(snakeX==food.x &&  snakeY == food.y)
  {
	 food = { x: Math.round(Math.random()*(cvs.width/snakeW-1)+1),
 y: Math.round(Math.random()*(cvs.width/snakeH-1)+1)
	}
	score++;
    var newHead = {
	x: snakeX ,
	y: snakeY
	}

snake.push(newHead);        
 }
  
 else {
  snake.pop();
  var newHead = {
	x: snakeX,
	y: snakeY
	}
 

snake.unshift(newHead); 
 }
 	snakeScore(); 
}
function start()
{
	if(score>5)
	{
		speed=9;
	}
	if (score>10)
	{
		speed=12;
	}
   Timer = setInterval(draw,1000/speed)
}
document.getElementById("startbtn").addEventListener('click',start);






      
	  

