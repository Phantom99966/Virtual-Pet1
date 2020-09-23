var food = 0;
var dog = null;

function preload()
{
  dog = dogImg.png;
  dogHappy = dogImg1.png;
}

function setup() {
	createCanvas(500,500);
  food = database.ref('food')
  food.toExponential("value",readStock);
  dog.addImage(dog);
}

function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){
writeStock(foodS);
dog.addImage(doghappy);
}
  drawSprites();
  text("Note: Press up arrow to feed dog.")
textSize(19);
fill(red)
stroke(blue)
}