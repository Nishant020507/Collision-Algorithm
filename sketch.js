
var movinrect,fixedrect;




function setup() {
  createCanvas(1200,800);
 fixedrect= createSprite(600,400,50,80);
fixedrect.shapeColor = "blue";
  movingrect = createSprite(400,200,80,30);
movingrect.shapeColor = "blue";
}

function draw() {
  background(255,255,255);
  
  movingrect.x = World.mouseX;
  movingrect.y = World.mouseY;

if(movingrect.x-fixedrect.x<movingrect.width/2+fixedrect.width/2 &&
  fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2 &&
  movingrect.y-fixedrect.y<movingrect.height/2+fixedrect.height/2 &&
  fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2 )
  {
movingrect.shapeColor = "orange";
fixedrect.shapeColor = "orange";
  }

  else{
movingrect.shapeColor = "blue";
fixedrect.shapeColor = "blue";

  }



  drawSprites();


}