function setup() {
  createCanvas(700, 400);
  
}

function draw() {

  for(let i = 0; i < 20; i++){
  stroke(random (250), random (250), random (250));
  strokeWeight(random (2, 20));
  point(random(width), random(height));
  }
}