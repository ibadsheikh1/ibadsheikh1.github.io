let x, y;
let xSpeed, ySpeed;
let ballSize = 50;
let ballColor;

function setup() {
  createCanvas(600, 400); 
  x = width / 2;
  y = height / 2;
  xSpeed = random(-5, 5);
  ySpeed = random(-5, 5);
  ballColor = color(255, 0, 0); 
}

function draw() {
  background(220); 

  fill(ballColor);
  noStroke();
  ellipse(x, y, ballSize);

  x += xSpeed;
  y += ySpeed;

  if (x < ballSize / 2 || x > width - ballSize / 2) {
    xSpeed *= -1; 
  }
  if (y < ballSize / 2 || y > height - ballSize / 2) {
    ySpeed *= -1; 
  }
}
function mousePressed() {
  let distance = dist(mouseX, mouseY, x, y);
  if (distance < ballSize / 2) {
    ballColor = color(random(255), random(255), random(255)); // Random color
  }
}
