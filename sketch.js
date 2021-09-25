var bg,question,code,answer,bg2;
var score=0;




function preload(){
  bg = loadImage("outerfish.png");
  bg2 = loadImage("fish and bowl together.png")
  
}



function setup() {
  createCanvas(2000,1000);
  createSprite(400, 200, 50, 50);
  question = new Question();
  answer = new Answer();
  
}

function draw() {
  background(bg);
  clues();
  answer.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

  if(score === 7) {
    clear();
    background(bg2)
    fill("black")
    textSize(40);
    text("FISH  IS IN THE BOWL",250, 200);
  }  
  drawSprites();
}