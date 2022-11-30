let timer = 500;
let nextChange = timer; //syncs the timer and change rate
let nextChange1 = timer + timer;
let nextChange2 = timer + timer + timer;
let nextChange3 = timer + timer + timer + timer;
let nextChange4 = timer + timer + timer + timer + timer;
let nextChange5 = timer + timer + timer + timer + timer + timer;
let nextChange6 = timer + timer + timer + timer + timer + timer + timer;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style("z-index", "-1");
}

function draw() {
  fill(255);
  stroke(255);
  textSize(12);
  strokeWeight(1);

  let x = 250;
  let y = 500;

  if (millis() > nextChange) {
    strokeWeight(1);
    circle(x, y, 10);
    text("2011", x - 12, y - 20, 40, 40);
    nextChange = millis() + timer;
  }
  if (millis() > nextChange1) {
    strokeWeight(1);
    text("2012", x + 106, y - 45, 40, 40);
    strokeWeight(2);
    circle(x + 120, y - 25, 10);
    line(x, y, x + 120, y - 25);
    nextChange1 = millis() + timer;
  }
  if (millis() > nextChange2) {
    strokeWeight(1);
    text("2013", x + 226, y - 48, 40, 40);
    strokeWeight(2);
    circle(x + 240, y - 28, 10);
    line(x + 120, y - 25, x + 240, y - 28);
    nextChange2 = millis() + timer;
  }

  if (millis() > nextChange3) {
    strokeWeight(1);
    text("2014", x + 344, y - 50, 40, 40);
    strokeWeight(2);
    circle(x + 360, y - 30, 10);
    line(x + 240, y - 28, x + 360, y - 30);
    nextChange2 = millis() + timer;
  }

  if (millis() > nextChange4) {
    strokeWeight(1);
    text("2015", x + 464, y - 420, 40, 40);
    strokeWeight(2);
    circle(x + 480, y - 400, 10);
    line(x + 360, y - 30, x + 480, y - 400);
    nextChange2 = millis() + timer;
  }

  if (millis() > nextChange5) {
    strokeWeight(1);
    text("2016", x + 586, y - 420, 40, 40);
    strokeWeight(2);
    ellipse(x + 600, y - 400, 10);
    line(x + 480, y - 400, x + 600, y - 400);
    nextChange2 = millis() + timer;
  }

  if (millis() > nextChange6) {
    strokeWeight(1);
    text("2017", x + 706, y - 420, 40, 40);
    strokeWeight(2);
    ellipse(x + 720, y - 400, 10);
    line(x + 600, y - 400, x + 720, y - 400);
    nextChange2 = millis() + timer;
  }
}
