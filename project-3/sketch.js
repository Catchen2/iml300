

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
  canvas.resize(windowWidth, windowHeight);
}

function draw() {
  background(0);

  for (let a = 60; a < windowHeight; a = a + 60) {
    strokeWeight(0.6);
    stroke(255);
    line(0, a, windowWidth, a);
  }

  for (let a = 60; a < windowWidth; a = a + 60) {
    strokeWeight(0.6);
    stroke(255);
    line(a, 0, a, windowHeight);
  }
}
