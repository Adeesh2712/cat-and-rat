var garden,gardenImage;
var tom,tomImage,tomAnimation,endTomImage;
var jerry,jerryImage,jerryAnimation,endJerryImage;



function preload() {

    gardenImage=loadAnimation("images/garden.png");

    tomImage=loadAnimation("images/tomOne.png");
    tomAnimation=loadAnimation("images/tomTwo.png","images/tomThree.png")
    endTomImage=loadAnimation("images/tomFour.png")

    jerryImage=loadAnimation("images/jerryOne.png");
    jerryAnimation=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    endJerryImage=loadAnimation("images/jerryFour.png");


}

function setup(){
    createCanvas(1000,800);

    garden=createSprite(100,100,10,10);
      garden.addAnimation("garden",gardenImage);
      garden.scale=2.5;

    tom=createSprite(900,700,10,10);
    tom.addAnimation("tom",tomImage);
    tom.scale=0.14;


    jerry=createSprite(100,700,10,10);
    jerry.addAnimation("jerry",jerryImage);
    jerry.scale=0.14;

      
}

function draw() {

    background(255);

    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x<(tom.width - jerry.width)/2+100){

        tom.velocityX=0;

        tom.addAnimation("endTom",endTomImage);
        tom.changeAnimation("endTom");
        tom.scale=0.14;

        jerry.addAnimation("endJerry",endJerryImage);
        jerry.changeAnimation("endJerry");
        jerry.scale=0.14;


    }
    




    keyPressed();
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyDown("left_arrow")){
      tom.velocityX=-5;
      tom.addAnimation('runningTom',tomAnimation);
      tom.changeAnimation('runningTom')

      jerry.addAnimation('runningJerry',jerryAnimation);
      jerry.changeAnimation('runningJerry');
  }


}
