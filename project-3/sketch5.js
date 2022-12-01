<<<<<<< HEAD
let imgs = [];

function preload() {
  for (var i = 0; i < 2; i++) {
    imgs[i] = loadImage("asset/pill.png");
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
=======
let imgs = [];

function preload() {
  for (var i = 0; i < 2; i++) {
    imgs[i] = loadImage("asset/pill.png");
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
>>>>>>> 20ce7c8dc0c2c4af125f03b69012376dfe7f671b
