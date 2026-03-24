function setup() {
  createCanvas(600, 400);
}


 function draw() {
  background("#009C3B");
  fill ("#FFDF00");
  noStroke();
  beginShape();
  vertex(width / 2, 50);
  vertex(550, height / 2 );
  vertex(width / 2, 350);
  vertex (50, height / 2 );
  endShape(CLOSE);
  fill("#002776");
  ellipse(width / 2, height / 2, 200, 200); 
 noStroke ();
 fill (255);
 textAlign (CENTER, CENTER);
 textSize(15);
 text("ORDEM E PROGRESSO", width / 2, height / 2 -5);
  }
