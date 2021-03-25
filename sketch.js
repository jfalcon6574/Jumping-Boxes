var canvas;
var music;
var platfrom1, platform2, platfrom3, playform4
var box
var edge

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
     platform1 = createSprite(100,580,180,50)
     platform1.shapeColor = ("green")
     platform2 = createSprite(300,580,180,50)
     platform2.shapeColor = "blue"
     platform3 = createSprite(500, 580,180,50)
     platform3.shapeColor = "purple"
     platform4 = createSprite (700,580,180,50)
     platform4.shapeColor = "pink"
    //create box sprite and give velocity
      box = createSprite (400,100,50,50)
      box.shapeColor = "white"
      box.x = random(20,750)
      box.velocityX = 4
      box.velocityY = 9

      
}
  
function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edges = createEdgeSprites()

    box.bounceOff(edges)
    
    if (platform1.isTouching(box)&&box.bounceOff(platform1)) {
     box.shapeColor = "green"
     music.play();
    }
    if (platform2.isTouching(box)&&box.bounceOff(platform2)) {
        box.shapeColor = "blue"
    }
    if (platform3.isTouching(box)&&box.bounceOff (platform3)){
        box.shapeColor = "purple"
        box.velocityX = 0 
        box.velocityY = 0
        music.stop();
    }
    if (platform4.isTouching(box)&&box.bounceOff (platform4)){
        box.shapeColor = "pink"
    }
    
    //add condition to check if box touching surface and make it box
    drawSprites();
}