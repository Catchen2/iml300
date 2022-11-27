
function setup() {
  createCanvas(windowHeight, windowWidth);
}

function draw() {
  background(0);

  for (let a = 60; a < windowHeight; a = a + 60) {
    strokeWeight(0.6);
    stroke(255);
    line(0, a, canvasWidth, a);
  }

  for (let a = 60; a < windowWidth; a = a + 60) {
    strokeWeight(0.6);
    stroke(255);
    line(a, 0, a, canvasHeight);
  }
}
