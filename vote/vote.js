var ballx = 450;
var bally = 150;
var ballSize = 80;
var score =0;
var gameState= "L1";

function preload() {
  map = loadImage('https://i.imgur.com/I86vaRV.png');
  vote = loadImage('https://i.imgur.com/pLTcXK1.png');
}

function setup() {
  createCanvas(1200, 720);
  textAlign(CENTER);
} // end setup


function draw() {
  cursor('https://i.imgur.com/gjYZPJF.png');
  if (gameState=="L1"){
  levelOne();
  } 
  if (gameState=="L2"){
   levelTwo(); 
  }
  if (gameState=="victory"){
    endScreen();
  }
  
  text(("States Secured: " + score), width/2, 40);
  fill(255,0,0);

} // end draw


function levelOne(){
  background(map);
  fill(255);
  textFont('Palatino Linotype', 30);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/4){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>25){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  
  image(vote, ballx, bally, ballSize, ballSize);
  
  
} // end level one

function levelTwo(){
  background(map);
  textFont('Palatino Linotype', 30);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>49){
// end screen
   gameState = "victory";
  }
  
//  line(ballx, bally, mouseX, mouseY);
  image(vote, ballx, bally, ballSize, ballSize);
} // end level two

function endScreen(){ // win game
  background(map);
  fill(255);
  text("Biden is the NEW President of the United States", width/2, height-100);
  textFont('Palatino Linotype', 25);
}