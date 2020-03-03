
function rand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function div(val, by){
  return (val - val % by) / by;
}

var alfbImg = new Image();
var playerImg = new Image();
var landImg = new Image();
var planteaImg = new Image();

alfbImg.src = "img/alfb.png";
playerImg.src = "img/player.png";
landImg.src = "img/land.png";
planteaImg.src = "img/plantea.png";

var mstr = [];
var map = []; var map_x = 0; var map_y = 0;
for (var i = 0; i < 64; i++) {
  for (var j = 0; j < 64; j++) {
    map[i] = [];
  }
}
for (var i = 0; i < 64; i++) {
  for (var j = 0; j < 64; j++) {
    map[i][j] = rand(5);
    if (map[i][j] > 1) {
      map[i][j] = 0;
    }
  }
}

var player = {
  x : 400,
  y : 300
}
