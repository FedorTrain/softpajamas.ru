function rand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function div(val, by){
  return (val - val % by) / by;
}

var ms = 2;

var alfbImg = new Image();
var playerImg = new Image();
var landImg = new Image();
var planteaImg = new Image();
var poopaImg = new Image();

alfbImg.src = "img/alfb.png";
playerImg.src = "img/player.png";
landImg.src = "img/land.png";
planteaImg.src = "img/plantea.png";
poopaImg.src = "img/poopa.png";

var map_biome = [];
for (var i = 0; i < 10; i++) {
    map_biome[i] = [];
}
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    map_biome[i][j] = rand(4)+1;
    if (j > 7 || i > 7) {map_biome[i][j] = 2};
  }
}

var map = []; var map_x = 0; var map_y = 0;
for (var i = 0; i < 70; i++) {
    map[i] = [];
}
for (var i = 0; i < 64; i++) {
  for (var j = 0; j < 64; j++) {
    map[i][j] = rand(5);
    if (map[i][j] > 1) {
      map[i][j] = rand(3);
    }
  }
}
for (var i = 0; i < 64; i++) {
  for (var j = 0; j < 64; j++) {
    if (i <= 1 || i >= 62 || j <= 1 || j >= 62) {
      map[i][j] = 5;
    } else {
      if (map[i][j] != 1) {
        if (!(i-1 <= 1 || i-1 >= 62 || j-1 <= 1 || j-1 >= 62)) {map[i-1][j-1] = 0;}
        if (!(i-1 <= 1 || i-1 >= 62 || j   <= 1 || j   >= 62)) {map[i-1][j]   = 0;}
        if (!(i-1 <= 1 || i-1 >= 62 || j+1 <= 1 || j+1 >= 62)) {map[i-1][j+1] = 0;}
        if (!(i   <= 1 || i   >= 62 || j-1 <= 1 || j-1 >= 62)) {map[i][j-1]   = 0;}
        if (!(i   <= 1 || i   >= 62 || j+1 <= 1 || j+1 >= 62)) {map[i][j+1]   = 0;}
        if (!(i+1 <= 1 || i+1 >= 62 || j-1 <= 1 || j-1 >= 62)) {map[i+1][j-1] = 0;}
        if (!(i+1 <= 1 || i+1 >= 62 || j   <= 1 || j   >= 62)) {map[i+1][j]   = 0;}
        if (!(i+1 <= 1 || i+1 >= 62 || j+1 <= 1 || j+1 >= 62)) {map[i+1][j+1] = 0;}
      }
    }
  }
}

var source = [];

var time = 0;
function world() {
  time++;
  if (time % 2000 == 0) {
    var xl = rand(60)+2;
    var yl = rand(60)+2;
    source.push({
      x : xl,
      y : yl,
      num : 100,
      biome : map_biome[div(xl,8)][div(yl,8)]
    });
  }
}

var player = {
  x : 400,
  y : 300,
  s : true,
  dir : 'd',
  move : false,
  im : 0,
  is : 0,
  //speak
  isSpeak : false,
  with : 0,

}

var mstrs = [];
for (var i = 0; i < 32; i++) {
  mstrs.push({
    x : rand(2000)+200,
    y : rand(2000)+200,
    s : rand(3),
    r : true,
    purpose : {x : rand(2000)+200, y : rand(2000)+200},
    need : "no",
    // speak
    isSpeak : false,
    with : 0,

  });
}





function move(e){
  switch (e) {
    case 65:
      player.x-=30;
      player.move = true;
      player.dir = 'l';
      break;
    case 68:
      player.x+=30;
      player.move = true;
      player.dir = 'r';
      break;
    case 87:
      player.y-=30;
      player.move = true;
      player.dir = 'u';
      break;
    case 83:
      player.y+=30;
      player.move = true;
      player.dir = 'd';
      break;
    }
  if (player.move) {
    player.im = 10;
  }
}
function s(cor, i) {
  switch (cor) {
    case 'x':
      if (player.move) {
        if (player.s) {
          return 0;
        } else {
          return 96;
        }
      } else {
        return 48;
      }
      break;
    case 'y':
      switch (player.dir) {
        case 'd':
          return 0;
          break;
        case 'l':
          return 48;
          break;
        case 'r':
          return 96;
          break;
        case 'u':
          return 144;
          break;
      }
      break;
    case "px":
      return 48 * mstrs[i].s;
      break;
    case "py":
      if (mstrs.r) {
        return 0;
      } else {
        return 48;
      }
      break;
  }
}
