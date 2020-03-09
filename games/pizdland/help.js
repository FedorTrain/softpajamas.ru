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
var poopaImg = new Image();

alfbImg.src = "img/alfb.png";
playerImg.src = "img/player.png";
landImg.src = "img/land.png";
planteaImg.src = "img/plantea.png";
poopaImg.src = "img/poopa.png";

var mstr = [];
var map = []; var map_x = 0; var map_y = 0;
for (var i = 0; i < 70; i++) {
  for (var j = 0; j < 70; j++) {
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
for (var i = 0; i < 64; i++) {
  for (var j = 0; j < 64; j++) {
    if (i <= 1 || i >= 62 || j <= 1 || j >= 62) {
      map[i][j] = 1;
    } else {
      if (map[i][j] == 1) {
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

function word() {

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
    point : [],
    need : "no",
    // speak
    isSpeak : false,
    with : 0,

  });
  mstrs[i].point.push(rand(64));
}



function update(){
  if (player.x - map_x < 160) {map_x = player.x - 160}
  if (player.x - map_x > 640) {map_x = player.x - 640}
  if (player.y - map_y < 120) {map_y = player.y - 120}
  if (player.y - map_y > 480) {map_y = player.y - 480}
  if (player.im == 0) {player.move = false;}
  if (player.im > 0) {player.im--;}
  if (player.is == 0) {
    player.s = !player.s;
    player.is = 15;
    for (var i = 0; i < mstrs.length; i++) {
      mstrs[i].s++;
      if (mstrs[i].s >= 3) mstrs[i].s = 0;
    }
  }
  if (player.is > 0) {player.is--;}
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
