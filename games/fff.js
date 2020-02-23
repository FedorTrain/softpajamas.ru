var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var red = [];

var green = [];

function rand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function start() {
  for (var i = 0; i < 3; i++) {
    green.push( {
      x : rand(cvs.width),
      y : rand(cvs.height)
    } );
  }
  red.push( {
    x : rand(cvs.width),
    y : rand(cvs.height),
    size : 1
  } );
}

function draw() {

  for (var i = 0; i < red.length; i++) {
    ctx.fillStyle = "#FF0000";
    ctx.beginPath();
    ctx.arc(red[i].x, red[i].y, 5 + red[i].size * 2, 0, Math.PI*2, true);
    ctx.fill();
  }

  for (var i = 0; i < green.length; i++) {
    ctx.fillStyle = "#00FF00";
    ctx.beginPath();
    ctx.arc(green[i].x, green[i].y, 4, 0, Math.PI*2, true);
    ctx.fill();
  }
}

function loop() {
  draw();
  requestAnimationFrame(loop);
}

start();
loop();
