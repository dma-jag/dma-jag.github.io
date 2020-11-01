var myCanvas = createCanvas(winWidth, winHeight);
    myCanvas.parent("content");

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(100, 100, 0);

  //Body
  noStroke()
  fill(0);
  arc(290, 600, 250, 520, PI, TWO_PI, OPEN);
  
  noStroke()
  fill(50)
  triangle(290, 390, 340, 390, 320, 460)
  
  //Face 
  noStroke()
  fill(247, 212, 212);
  rect(215, 200, 170, 140, 5.2, 5.2);

  //Ears
  arc(210, 275, 40, 60, 0, PI + HALF_PI, PI + HALF_PI, OPEN);


  //Beard
  noStroke()
  fill(30, 10, 10);
  arc(300, 320, 173, 180, 0, PI, PI + QUARTER_PI, OPEN);
  
  //Mouth
  fill(255, 102, 102);
  arc(323, 325, 45, 30, 0, PI);

  //Eyeshape
  strokeCap(SQUARE);
  noFill();
  stroke(0);
  strokeWeight(5);
  arc(295, 255, 30, 15, PI, TWO_PI, OPEN);
  arc(355, 255, 30, 15, PI, TWO_PI, OPEN);

  //Eyes
  strokeWeight(1)
  fill(0);
  ellipse(300, 260, 25, 25);
  ellipse(360, 260, 25, 25);

  //Eyeballs
  noStroke()
  fill(255)
  ellipse(298, 252, 8, 8);
  ellipse(355, 252, 8, 8);

  //Beanie
  noStroke()
  fill(30);
  arc(292, 215, 185, 195, 2.83, 5.97);
  arc(297, 215, 185, 195, PI, TWO_PI);

  //SideBeard
  noStroke();
  fill(30, 10, 10);
  translate(width / 2, height / 2);
  rotate(PI / 1.03);
  rect(58, -22, 30, 90, 5.2, 5.2);
  
  //Fold
  noStroke();
  fill(0);
  translate(width / 2, height / 2);
  rotate(PI / 1);
  rect(201, 200, 201, 40, 5.2, 5.2);

  //Nose
  strokeWeight(1)
  fill(226, 192, 192);
  triangle(320, 310, 329, 255, 340, 320)

  //Mustache
  strokeWeight(1)
  fill(0);
  ellipse(300, 320, 60, 30);
  rotate(.2)
  ellipse(400, 250, 60, 30);





}




