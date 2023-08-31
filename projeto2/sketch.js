let cor;
let CirculoX; // x
let CirculoY; // y


function setup() {
  createCanvas(400, 400);
  background(220);
  cor =  color(random(0,255),random(0,255),random(0,255));
  CirculoX = [0, 0 ,0];
  CirculoY = [random (height), random(height), random(height)];
}

function draw() {
  fill(cor);
  
  // console.log(circuloX.length);
  for(let contador in CirculoX) {
  console.log(contador);
 circle(CirculoX[contador] ,CirculoY[contador] ,50);
  }

   
  CirculoX[0] += random(0, 3);
  CirculoY[0] += random(-3, 3);
  
  // CirculoX[1] += random(0, 3);
  // CirculoY[1] += random(-3, 3);
  
 // CirculoX[2] += random(0, 3);
  // CirculoY[2] += random(-3, 3);
  
   
  if(mouseIsPressed) {
    cor = color(random(0,255), random(0,255), random(0,255), random(0, 100)) ;
  }
}

  
  