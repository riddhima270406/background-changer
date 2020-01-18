
var r,g,b;
var changer;

function setup(){
  createCanvas(750,600);

  r = 0;
  g = 0;
  b = 0;

  changer = createSprite(200,200,30,30);
changer.shapeColor = "green";

}

function draw(){
  background(rgb(r,g,b));

  textSize(25);
  text("Move the green box to change the colour of the background",50,300);

changer.x = World.mouseX;
changer.y = World.mouseY;
  

  if(changer.x < 200){
    b = 15;
  }
  else {
    b = 255;
  }

  if(changer.x < 400){
  g = 15;
  }
  else {
    g = 255;
  }

  if(changer.x < 600){
    r = 100;
  }
  else {
    r = 255;
  }
drawSprites();
}


