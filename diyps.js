var img;
var initials ='jg'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 250; // off white background
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  img = loadImage('https://i.imgur.com/2ODVVgS.png');
}

function setup() {
createCanvas(windowWidth, windowHeight);  // canvas size
background(screenbg);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // simple brush
   
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  }
    else if (toolChoice == '2') { // big brush

    stroke(20);
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
    else if (key == '3') { // small triangle
    stroke(0, 0, 0);
    tri1();
  }
    else if (key == '4') { // big triangle
    stroke(0, 0, 0);
    tri2();
  }
    else if (key == '5') { // small square
    stroke(0, 0, 0);
    box1();
  }   
    else if (key == '6') { // big square
    stroke(0, 0, 0);
    box2();
  }
    else if (key == '7') { // small ellipse
    stroke(0, 0, 0);
    eli1();
  }
    else if (key == '8') { // big ellipse
    stroke(0, 0, 0);
    eli2();
  }
    else if (key == '9') { // grey
    stroke(0, 0, 0);
    grey();
  }
    else if (toolChoice == '0') {
    stroke(0, 0);
    fill(random(255), random(255), random(255), random(255));
    ellipse(mouseX, mouseY, 300, 300);
  }
    else if (toolChoice == 'v' || toolChoice == 'V') { // value
    image(img, mouseX, mouseY);
    
  }
 }
 

function tri1(r, g, b) {
  x = mouseX;
  y = mouseY;
  noFill();
  triangle(x-15, y-37, x-29, y-10, x-43, y-39);
}
function tri2(r, g, b) {
  x = mouseX;
  y = mouseY;
  noFill();
  triangle(x-30, y-75, x-58, y-20, x-86, y-75);
}
function box1(r, g, b) {
  x = mouseX;
  y = mouseY;
  noFill();
  rect(x-10, y-10, 20, 20);
}
function box2(r, g, b) {
  x = mouseX;
  y = mouseY;
  noFill();
  rect(x-30, y-30, 60, 60);
}
function eli1(r, g, b) {
  x = mouseX;
  y = mouseY;
  noFill();
  ellipse(x-10, y-10, 20, 20);
}
function eli2(r, g, b) {
  x = mouseX;
  y = mouseY;
  noFill();
  ellipse(x-30, y-30, 60, 60);
}
function grey(r, g, b) {
  x = mouseX;
  y = mouseY;
  fill(10,0,0,10);
  noStroke()
  rect(x-50, y-50, 100, 100);
}
function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(screenbg); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
