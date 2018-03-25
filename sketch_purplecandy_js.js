function setup() {
  createCanvas(512,256);
  background(255);
  stroke(57, 0, 147);
  
  var i;
  for(i=0; i<width; i=i+4) {
    line(i,0, i, height/3);
  }
  stroke(255, 192, 255);
  for(i= (height*(2/3)); i<height; i=i+3) {
    line(0,i,width, i);
  }
}

function draw() {
  var slant = 400;
  var i;

  for(i=-slant; i<width; i=i+40){
      stroke(random(255), random(255), random(255));
     
     line(i,0,i+slant, height);
  }
  for(i= 32;i<width; i=i+128){
    stroke(111,48,201);
    strokeWeight(5);
    fill(255);
    ellipse(i,224, 64,64);
  }
  for(i=96; i<width; i=i+128){
    rectMode(CENTER);
    stroke(255);
    strokeWeight(5);
    fill(111,48,201);
    rect(i,224,64,64);
  } 
}
