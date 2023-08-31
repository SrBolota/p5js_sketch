function setup() {
  createCanvas(800, 800);
  background("white");
}

function draw() {
  
  stroke("yellow");
  fill("purple");
  
  // console.log(mouseIsPressed)
  
 if (mouseIsPressed) {
  rect(mouseX,mouseY,23,34); 
  }
  
}