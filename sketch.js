var ball,wall,wall2,wall3,wall4,wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,wall18,wall19,wall20,wall21,wall22,wall23,wall24;
var scaryImg,Img;
function preload(){
  Img=loadImage("scary.jpg")
}

function setup(){
    createCanvas(600,600)

    ball = createSprite(290,228,10,10);
    wall = createSprite(17,50,30,100);
    wall2 = createSprite(55,115,100,30);
    wall3 = createSprite(90,30,85,60);  
    wall4 = createSprite(400,90,30,90)
    wall5 = createSprite(300,250,90,30)
    wall6 = createSprite(450,580,1000,30)
    wall7 = createSprite(580,300,30,1000)
    wall8 = createSprite(443,349,250,30)
    wall9 = createSprite(323,505,30,200)
    wall10 = createSprite(258,179,90,30)
    wall11 = createSprite(100,500,90,30)
    wall12 = createSprite(100,400,30,90)
    wall13 = createSprite(250,400,90,30)
    wall14 = createSprite(243,300,30,90)
    wall15 = createSprite(263,387,30,90)
    wall16 = createSprite(523,523,90,30)
    wall17 = createSprite(400,298,30,90)
    wall18 = createSprite(431,174,90,30)
    wall19 = createSprite(243,100,90,30)
    wall20 = createSprite(320,210,30,90)
    wall21 = createSprite(140,180,330,30)
    wall22 = createSprite(230,539,30,90)
    wall23 = createSprite(523,123,90,30)
    wall24 = createSprite(186,378,30,90)
    wall25 = createSprite(781,489,90,30)
    wall26 = createSprite(326,334,30,90)
    wall27 = createSprite(237,238,90,30)
    wall28 = createSprite(150,75,30,155)
    wall29 = createSprite(330,103,120,30)
    wall30 = createSprite(232,289,90,30)
}

function draw() {
  background("white");
 
    wall.shapeColor = ('#FF0000');
    wall2.shapeColor = ('#0000FF');
    wall3.shapeColor = ('green');

    ball.velocityY = 0;
    ball.velocityX = 0;
  
  if(ball.isTouching(wall) || ball.isTouching(wall2) || ball.isTouching(wall3) || ball.isTouching(wall4) || ball.isTouching(wall5) || ball.isTouching(wall6) || ball.isTouching(wall7) || ball.isTouching(wall8) || ball.isTouching(wall9) || ball.isTouching(wall10) || ball.isTouching(wall11) || ball.isTouching(wall12) || ball.isTouching(wall13) || ball.isTouching(wall14) || ball.isTouching(wall15) || ball.isTouching(wall16) || ball.isTouching(wall17) || ball.isTouching(wall18) || ball.isTouching(wall19) || ball.isTouching(wall20) || ball.isTouching(wall21) || ball.isTouching(wall22) || ball.isTouching(wall23) || ball.isTouching(wall24) || ball.isTouching(wall25) || ball.isTouching(wall26) || ball.isTouching(wall27) || ball.isTouching(wall28) || ball.isTouching(wall29) || ball.isTouching(wall30) ){
  ball.x=290;
  ball.y=228;
  ball.velocityX=0;
  ball.velocityY=0;
  }
  
  if(keyDown(UP_ARROW)) {
    ball.velocityX = 0;
    ball.velocityY = -2;
  }
  
  if(keyDown(DOWN_ARROW)) {
    ball.velocityX = 0;
    ball.velocityY = 2;
  }
  
  if(keyDown(LEFT_ARROW)) {
    ball.velocityX = -2;
    ball.velocityY = 0;
  }
  
  if (keyDown(RIGHT_ARROW)) {
    ball.velocityX = 2;
    ball.velocityY = 0;
  }

  if (ball.x < 70 && ball.y < 20){
    //scaryImg = createSprite(300,300,600,400)
    wall.visible = false
    wall2.visible = false
    wall3.visible = false
    wall4.visible = false
    wall5.visible = false
    wall6.visible = false
    wall7.visible = false
    wall8.visible = false
    wall9.visible = false
    wall10.visible = false
    wall11.visible = false
    wall12.visible = false
    wall13.visible = false
    wall14.visible = false
    wall15.visible = false
    wall16.visible = false
    wall17.visible = false
    wall18.visible = false
    wall19.visible = false
    wall20.visible = false
    wall21.visible = false
    wall22.visible = false
    wall23.visible = false
    wall24.visible = false
    wall25.visible = false
    wall26.visible = false
    wall27.visible = false
    wall28.visible = false
    wall29.visible = false
    wall30.visible = false
    
    imageMode(CENTER)
    image(Img,300,300,600,600)
    
  }
  
  drawSprites();
}