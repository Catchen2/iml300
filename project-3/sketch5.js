let imgs = [];

function preload() {
  for (var i = 0; i < 2; i++) {
    imgs[i] = loadImage("https://cdn.glitch.global/3c6c63b1-b30e-4912-9dcc-f9f5cb30d592/pill.png?v=1669847759376");
  }
}

function setup() {
  var cnv = createCanvas(windowWidth, windowHeight);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) /2 ;
  cnv.position(x, y);
  cnv.style("z-index", "-1");
  
  imageMode(CENTER);
  frameRate(4);
}

function draw() {
  for (var i = 1; i < 2; i++) {
    image(imgs[i], random(width), random(height), 20, 45);
  }
}
