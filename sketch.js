var planta1Img,planta2Img,planta3Img,planta4Img,planta5Img,planta6Img, fondo1img,fondo2img;
var planta1,planta2,planta3,planta4,planta5,planta6,fondo1,fondo2;
var gotas=0, Gstate="inicio";
var conteo=0;
var up, down, upImg, downImg, tb, sb, tbImg, sbImg;
//var cactus ={
  //name: "San Pedro Cactus",
  //scientificname:"Echinopsis pachanoi",
  //foundin: ["Argentina", "Bolivia", "Colombia"],
  //img: "cactusImg fence"
//}

function preload() {
  planta1Img = loadImage("Cacti1.PNG")
  planta2Img = loadImage("cactinumber2.png")
  planta3Img = loadImage("cutecacti.png")
  planta4Img = loadImage("flowernumber2.jpg")
  planta5Img = loadImage("planta.jpg")
  planta6Img = loadImage("roseplant.jpg")

  fondo1img = loadImage("background.webp")  
  fondo2img = loadImage("Fence.PNG")

  sbImg = loadImage("sb.png")
  tbImg = loadImage("tb.png")
}
function setup() {
  createCanvas(windowWidth, windowHeight);

  fondo1= createSprite(windowWidth/2, windowHeight/2, 20,20);
  fondo1.addImage(fondo1img);
  fondo1.visible=false
  fondo1.scale=1;

  planta1= createSprite(windowWidth/4, windowHeight/6,20,20);
  planta2= createSprite(windowWidth/4, windowHeight*3/6,20,20);
  planta3= createSprite(windowWidth/4, windowHeight*5/6,20,20);
  planta4= createSprite(windowWidth*3/4, windowHeight/6,20,20);
  planta5= createSprite(windowWidth*3/4, windowHeight*3/6,20,20);
  planta6= createSprite(windowWidth*3/4, windowHeight*5/6,20,20);

  planta1.addImage(planta1Img)
  planta1.scale=.1
  planta1.visible=false;
  planta2.addImage(planta2Img)
  planta2.scale=.1
  planta2.tint=1
  planta2.visible=false;
  planta3.addImage(planta3Img)
  planta3.scale=.15
  planta3.tint=1
  planta3.visible=false;
  planta4.addImage(planta4Img)
  planta4.scale=.15
  planta4.tint=1
  planta4.visible=false;
  planta5.addImage(planta5Img)
  planta5.scale=.1
  planta5.tint=1
  planta5.visible=false;
  planta6.addImage(planta6Img)
  planta6.scale=.3
  planta6.tint=1
  planta6.visible=false;

  fondo2= createSprite(windowWidth/2, windowHeight/2, 20,20);
  fondo2.addImage(fondo2img);
  fondo2.scale=.5;fondo2.visible=false;

  /* sb.addImage(sbImg)
  sb.scale=.1
  sb.visible=false
  tb.addImage(tbImg)
  tb.scale=.1
  tb.visible=false
  */

 // input=createInput();
 // input.position(windowWidth/4,windowHeight/18+50)
}

function draw() {
  if (Gstate ==="inicio"){
    background("olive");
    fondo2.visible=true
    textSize(20)
    fill("white")
    text("Please choose the user.", windowWidth*3/7, windowHeight/18)
    text("   Teacher/Maestro=T               Student/Estudiante=S", windowWidth*2/6, windowHeight*5/18)
    text("Por favor,elige el usuario.",windowWidth*3/7, windowHeight*3/18) 
    //var value=input.value();
    drawSprites();
    if (keyDown ("s")){
      Gstate="play";
    }      
    else{
      if (keyDown ("t")){
        Gstate="admin";
      }
    }
  } 
  else{
    if (Gstate ==="play"){
      fondo1.visible=true
      fondo2.visible=false
      planta1.visible=true;
      planta2.visible=true;
      planta3.visible=true;
      planta4.visible=true;
      planta5.visible=true;
      planta6.visible=true;
      drawSprites();
      textSize(20)
      fill("white")
      text("Toca la planta una vez para crecer. Para salir, E. Press the plants one time to grow. To exit, E", windowWidth/6, windowHeight/18)
      text("Gota(s)/Drop(s):"+gotas, windowWidth*5/12, windowHeight*4/18)
      text("(1 drop for each plant, 1 gota para cada planta)", windowWidth*2/6, windowHeight*3/18)
      
      if (mousePressedOver(planta1) && conteo<5){
        conteo++
        gotas=gotas-1
        planta1.scale=planta1.scale*1.1
       }
       if (mousePressedOver(planta2)&&conteo<10){
        conteo++
        gotas=gotas-1
        planta2.scale=planta2.scale*1.1
       } 
       if (mousePressedOver(planta3)&&conteo<15){
        conteo++
        gotas=gotas-1
        planta3.scale=planta3.scale*1.1
       } 
       if (mousePressedOver(planta4)&&conteo<20){
        conteo++
        gotas=gotas-1
        planta4.scale=planta4.scale*1.1
       } 
       if (mousePressedOver(planta5)&&conteo<25){
        conteo++
        gotas=gotas-1
        planta5.scale=planta5.scale*1.1
       } 
       if (mousePressedOver(planta6)&&conteo<30){
        conteo++
        gotas=gotas-1
        planta6.scale=planta6.scale*1.1
       } 
       if (conteo===5){
         planta2.tint=0
       }
       if (conteo===10){
        planta3.tint=0
      }
      if (conteo===15){
        planta4.tint=0
      }
      if (conteo===20){
        planta5.tint=0
      }
      if (conteo===25){
        planta6.tint=0
      }

  }  
  else{
    if(Gstate==="admin"){
      fondo2.visible=false;
      drawSprites();
      background("white");
      textSize(20)
    }
    fill("black")
    text("Para aumentar el número de gotas, oprime flecha arriba.", windowWidth/4, windowHeight/18)
    text("Salir=E Exit=E", windowWidth/4, windowHeight*6/18)
    text("Down arrow to decrease/Flecha abajo para disminuir.",windowWidth/4, windowHeight*4/18)
    text("To increase the amount of drops press the up arrow.", windowWidth/4, windowHeight*2/18)
    text("Gotas disponibles/Drops available: "+gotas,windowWidth/4,windowHeight*10/18)
    text("(Cada planta necesita 1 gota para crecer. Each plant needs 1 drop to grow.)",windowWidth/4,windowHeight*8/18)
    if (keyDown("up")){
      gotas=gotas+1;
    }
    if (keyDown("down")){
     gotas=gotas-1;
    }
    
  }
  
  if (keyDown("e")){
    fondo1.visible=false;
    planta1.visible=false;
      planta2.visible=false;
      planta3.visible=false;
      planta4.visible=false;
      planta5.visible=false;
      planta6.visible=false;
    Gstate="inicio"
  }
  console.log (Gstate)
  }

}