var car,wall;
var weight , speed;

function setup() {
  createCanvas(1300,400);

   weight = random(400,1500);   
   speed = random(55,90);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  wall = createSprite(1200, 200, 00, height/2);
  wall.shapeColor = color(80,80,80) ;
}

function draw() {
  background("blue");

  if(wall.x-car.x<(wall.width+car.width)/2)  {
    car.velocityX=0;
    var deformation = 0.5 * weight * speed * speed/22500;

    if(deformation>180){
      car.shapeColor = color(255,0,0) ;
    } 

    if(deformation>100 && deformation<180){
      car.shapeColor = color(230,230,0) ;
    }

    if(deformation<100){
      car.shapeColor = color(0,255,0) ;
    }
  }
  
  drawSprites();
}