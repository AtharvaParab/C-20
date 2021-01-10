function setup() {
  createCanvas(800,400);
 M=createSprite(400, 200, 50, 50);
 F=createSprite(400,300,40,40);

  M.shapeColor="green";
  F.shapeColor="green";


}

function draw() {
  background(255,255,255); 
  M.x=mouseX;
  M.y=mouseY;
  
  console.log(M.x-F.x)

  if(M.x-F.x<M.width/2+F.width/2 && F.x-M.x<M.width/2+F.width/2 
    && M.y-F.y<M.height/2+F.height/2 && F.y-M.y<M.height/2+F.height/2){
    M.shapeColor="red";
    F.shapeColor="red";
  } else{
    M.shapeColor="green";
    F.shapeColor="green";
  }

  drawSprites();
}