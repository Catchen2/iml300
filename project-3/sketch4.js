let timer = 500;
let nextChange = timer; //syncs the timer and change rate
let nextChange1 = timer + timer;
let nextChange2 = timer + timer + timer;
let nextChange3 = timer + timer + timer + timer;
let nextChange4 = timer + timer + timer + timer + timer;
let nextChange5 = timer + timer + timer + timer + timer + timer;
let nextChange6 = timer + timer + timer + timer + timer + timer + timer;
let nextChange7 = timer + timer + timer + timer + timer + timer + timer + timer;

function setup() {
  var cnv = createCanvas(735, 800);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2-50;
  cnv.position(x, y);
  cnv.style("z-index", "-2");
}

function draw() {
  fill(255);
  stroke(255);
  textSize(12);
  strokeWeight(1);

  let x = 20;
  let y = 550;

  if (millis() > nextChange) {
    strokeWeight(1);
    circle(x, y, 10);
    text("2012", x - 12, y - 20, 40, 40);
    text("$150", x - 12, y + 10, 40, 40);
    nextChange = millis() + timer;
  }
  if (millis() > nextChange1) {
    strokeWeight(1);
    text("2013", x + 88, y - 55, 40, 40);
    text("$190", x + 88, y - 25, 40, 40);
    strokeWeight(2);
    circle(x + 100, y - 35, 10);
    line(x, y, x + 100, y - 35);
    nextChange1 = millis() + timer;
  }
  if (millis() > nextChange2) {
    strokeWeight(1);
    text("2014", x + 188, y - 120, 40, 40);
    text("$260", x + 188, y - 90, 40, 40);
    strokeWeight(2);
    circle(x + 200, y - 100, 10);
    line(x + 100, y - 35, x + 200, y - 100);
    nextChange2 = millis() + timer;
  }

  if (millis() > nextChange3) {
    strokeWeight(1);
    text("2015", x + 288, y - 170, 40, 40);
    text("$280", x + 288, y - 140, 40, 40);
    strokeWeight(2);
    circle(x + 300, y - 150, 10);
    line(x + 200, y - 100, x + 300, y - 150);
    nextChange2 = millis() + timer;
  }

  if (millis() > nextChange4) {
    strokeWeight(1);
    text("2016", x + 388, y - 200, 40, 40);
    text("$290", x + 388, y - 170, 40, 40);
    strokeWeight(2);
    circle(x + 400, y - 180, 10);
    line(x + 300, y - 150, x + 400, y - 180);
    nextChange2 = millis() + timer;
  }

  if (millis() > nextChange5) {
    strokeWeight(1);
    text("2017", x + 488, y - 220, 40, 40);
    text("$300", x + 488, y - 190, 40, 40);
    strokeWeight(2);
    ellipse(x + 500, y - 200, 10);
    line(x + 400, y - 180, x + 500, y - 200);
    nextChange2 = millis() + timer;
  }

  if (millis() > nextChange6) {
    strokeWeight(1);
    text("2018", x + 588, y - 240, 40, 40);
    text("$325", x + 588, y - 210, 40, 40);
    strokeWeight(2);
    circle(x + 600, y - 220, 10);
    line(x + 500, y - 200, x + 600, y - 220);
    nextChange2 = millis() + timer;
  }

  if (millis() > nextChange7) {
    strokeWeight(1);
    text("2019", x + 688, y - 260, 40, 40);
    text("$350", x + 688, y - 230, 40, 40);
    strokeWeight(2);
    circle(x + 700, y - 240, 10);
    line(x + 600, y - 220, x + 700, y - 240);
    nextChange2 = millis() + timer;
  }
}
