

function setup() {
  canvas = createCanvas(2000, 2000);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");

}

function draw() {
  background(0);

  for (let a = 60; a < 2000; a = a + 60) {
    strokeWeight(0.6);
    stroke(255);
    line(0, a, 2000, a);
  }

  for (let a = 60; a < 2000; a = a + 60) {
    strokeWeight(0.6);
    stroke(255);
    line(a, 0, a, 2000);
  }
}
