function rand(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function div(val, by) {
  return (val - val % by) / by;
}
function cpr(arr1,arr2) {
  if (arr1.length == arr2.length){
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        return false;
      }
    }
  } else {
    return false;
  }
  return true;
}
function m(i,j) {
  console.log("s-",mstrs[i].speak,"w-",mstrs[i].with,"f-",mstrs[i].first,"wr-",mstrs[i].word)
  console.log("wt -",mstrs[i].wordTime); i = j;
  console.log("s-",mstrs[i].speak,"w-",mstrs[i].with,"f-",mstrs[i].first,"wr-",mstrs[i].word)
  console.log("wt -",mstrs[i].wordTime);
}
var kkk = [];
function sp() {
  kkk = [];
  for (var i = 0; i < mstrs.length; i++) {
    if (mstrs[i].speak) {
      kkk[kkk.length] = i;
    }
  }
  console.log(kkk);
}
function chek() {
  var num = 0;
  for (var i = 0; i < mstrs.length; i++) {
    if (mstrs[i].speak) num++;
  }
  return num;
}
function delWrong() {
  for (var i = 0; i < mstrs.length; i++) {
    if (mstrs[i].speak && mstrs[i].with != 100) {
      if (!mstrs[mstrs[i].with].speak){
        mstrs[i].speak = false;
        mstrs[i].word = [0,0];
        mstrs[i].with = -1;
      }
    }
  }
}
function end() {
  z = false;
  console.log("Win");
  alert("Win");
}
function numC(n) {
  return String(n).length;
}


{// load texture
var alfbImg = new Image();
var playerImg = new Image();
var landImg = new Image();
var planteaImg = new Image();
var poopaImg = new Image();
var maplogo = new Image();
var mapImg = new Image();
var menusp = new Image();
var bigTreeUp = new Image();
var bigTreeDown = new Image();
var bridge = new Image();
var bridgeFix = new Image();
var bridge2 = new Image();
var bridge2Fix = new Image();
var nessyImg = new Image();
var tree = new Image();
var treeInv = new Image();

alfbImg.src = "img/alfb.png";
playerImg.src = "img/player.png";
planteaImg.src = "img/plantea.png";
poopaImg.src = "img/poopa.png";
maplogo.src = "img/maplogo.png";
mapImg.src = "img/map.png";
menusp.src = "img/menuspeak.png";
bigTreeUp.src = "img/bigTreeUp.png";
bigTreeDown.src = "img/bigTreeDown.png";
bridge.src = "img/bridge.png";
bridgeFix.src = "img/bridgeFix.png";
bridge2.src = "img/bridge2.png";
bridge2Fix.src = "img/bridge2.png";
nessyImg.src = "img/nessy.png";
tree.src = "img/tree.png";
treeInv.src = "img/treeInv.png";
}

{//sound
var soundPizd = new Audio();
var soundEat = new Audio();
soundPizd.preload = 'auto';
soundPizd.src = "audio/BerlinistDescent.mp3";
soundEat.preload = 'auto';
soundEat.src = "audio/burp.mp3";

soundPizd.addEventListener ("canplaythrough", event => {
});
soundPizd.play();

}

var MS = 2;
var numWord = 11;
var PS = 8;
var JESUS = true;
var WT = 60 * 2;
var seeMap = false;

// alfb
var alfb = [
  [1,2,3],
  [4,5,6],
  [2,3,8],
  [5,6,8],
  [1,4,7],
  [3,5,8],
  [2,4,5],
  [5,6,7],
  [2,3,7],
  [3,5,7],
  [2,6,7]
]

// MAP
{
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

var map = [];
var map_x = 0;
var map_y = 0;
for (var i = 0; i < 70; i++) {
    map[i] = [];
}

function createMapPiz() {
  for (var i = 0; i < 64; i++) {
    for (var j = 0; j < 64; j++) {
      if (i <= 2 || i >= 61 || j <= 2 || j >= 61) {
        if (i <= 2 || i >= 61 || j <= 2 || j >= 61) map[i][j] = 9;
        if (i == 2  && j > 2 && j < 61) map[i][j] = 2;
        if (i == 61 && j > 2 && j < 61) map[i][j] = 1;
        if (j == 2  && i > 2 && i < 61) map[i][j] = 0;
        if (j == 61 && i > 2 && i < 61) map[i][j] = 3;
      } else {
        map[i][j] = 8;
      }
    }
  }
  map[2][2] = 4;
  map[2][61] = 7;
  map[61][2] = 5;
  map[61][61] = 6;
  landImg.src = "img/aaa.png";
}
function createMapPiz2() {
  map[0]  = [9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[1]  = [9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[2]  = [9,9,9,9,9,8,8,8, 8,8,8,8,8,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,8,8,8,8,8,8,8, 8,9,9,9,9,9,9,9];
  map[3]  = [9,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,8,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,9,9,9,9];
  map[4]  = [9,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,8,9, 9,8,9,9,9,9,9,9, 9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,9,9,9];
  map[5]  = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,9,9,9,9,9, 9,9,9,9,8,8,8,8, 8,8,9,9,9,9,9,9, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,9,9,9];
  map[6]  = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,9,9,9,9,9, 9,9,9,9,9,8,8,8, 8,9,9,9,9,9,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[7]  = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,8,8, 9,9,9,9,9,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];

  map[8]  = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,9,9,9,9,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[9]  = [9,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,9, 9,9,9,9,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[10] = [9,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,9, 9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,9,9,9];
  map[11] = [9,9,9,8,8,8,8,8, 8,8,8,8,8,8,9,9, 9,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,9,9,9];
  map[12] = [9,9,9,8,8,8,8,8, 8,8,8,8,8,9,9,9, 9,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,9,9,9,9,9];
  map[13] = [9,9,9,8,8,8,8,8, 8,8,8,8,9,9,9,9, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9, 9,9,9,9,9,8,8,9, 9,9,9,9,9,9,9,9];
  map[14] = [9,9,9,8,8,8,8,8, 8,8,8,8,9,9,9,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,9,9,9,9,9, 9,9,9,9,9,8,8,9, 9,9,9,9,9,9,9,9];
  map[15] = [9,9,8,8,8,8,8,8, 8,8,8,9,9,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,9,9,9,9,8,8, 8,8,8,8,8,8,8,8, 8,8,8,9,9,9,9,9];

  map[16] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,9,9,9,9];
  map[17] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,9,9,9];
  map[18] = [9,9,8,8,8,8,8,8, 8,8,8,9,9,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,9,9,9];
  map[19] = [9,9,9,8,8,8,8,8, 8,8,9,9,9,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,9,9,9];
  map[20] = [9,9,9,8,8,8,8,8, 8,8,9,9,9,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[21] = [9,9,9,9,9,8,8,8, 8,9,9,9,9,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[22] = [9,9,9,9,9,9,9,9, 9,9,9,9,9,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,9, 9,9,9,9,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[23] = [9,9,9,9,9,9,9,9, 9,9,9,9,9,9,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,9,9,9,9,9, 9,9,9,9,9,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];

  map[24] = [9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,8,8,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[25] = [9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,8,8,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[26] = [9,9,9,9,9,9,9,9, 9,9,8,8,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,8,8,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[27] = [9,9,9,9,9,9,9,9, 9,9,8,8,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9, 9,9,9,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[28] = [9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,9, 9,9,9,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[29] = [9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,9, 9,9,9,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[30] = [9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[31] = [9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,8,8,8,8,8, 8,8,8,8,8,8,9,9];

  map[32] = [9,9,9,9,8,8,8,8, 8,8,8,8,8,8,9,9, 9,9,9,9,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[33] = [9,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,9,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[34] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[35] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,9,8,8,8,8, 8,8,8,8,8,9,9,9];
  map[36] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,9,8,8,8,8, 8,8,8,8,8,9,9,9];
  map[37] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,9,9,8,8,8, 8,8,8,8,8,9,9,9];
  map[38] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,9,9,8,8,8, 8,8,8,8,9,9,9,9];
  map[39] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,9,9,9,8,8, 8,8,8,9,9,9,9,9];

  map[40] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[41] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[42] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,9,9,9,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[43] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,9,9,9,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[44] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,9,9,9,9,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 9,9,9,9,8,8,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[45] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,8,8,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[46] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,8,8,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[47] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,9,9,9,9,9,9, 9,9,9,9,8,8,8,8, 8,8,8,8,8,8,8,8, 8,9,9,9,9,9,9,9];

  map[48] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,9,9,9,9,9, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,9,9,9,9];
  map[49] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,9,9,9,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,9,9,9];
  map[50] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,9,9,9,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[51] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[52] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,9,9];
  map[53] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,9,9,9,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,9,9,9];
  map[54] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,9,9,9,9, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,9,9,9];
  map[55] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,9,9,9,9, 9,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,9,9,9,9,9];

  map[56] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[57] = [9,9,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[58] = [9,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[59] = [9,9,9,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[60] = [9,9,9,9,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[61] = [9,9,9,9,9,9,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,8, 8,8,8,8,8,8,8,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[62] = [9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
  map[63] = [9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9, 9,9,9,9,9,9,9,9];
}
function fixMap() {
  for (var i = 1; i < 63; i++) {
    for (var j = 1; j < 63; j++) {
      if (map[i][j] == 8) {
             if (map[i-1][j] == 9 && map[i][j+1] != 9 && map[i][j-1] != 9) map[i][j] = 0;
        else if (map[i][j+1] == 9 && map[i+1][j] != 9 && map[i-1][j] != 9) map[i][j] = 1;
        else if (map[i][j-1] == 9 && map[i+1][j] != 9 && map[i-1][j] != 9) map[i][j] = 2;
        else if (map[i+1][j] == 9 && map[i][j+1] != 9 && map[i][j-1] != 9) map[i][j] = 3;
        else if (map[i-1][j] == 9 && map[i][j-1] == 9) map[i][j] = 4;
        else if (map[i-1][j] == 9 && map[i][j+1] == 9) map[i][j] = 5;
        else if (map[i+1][j] == 9 && map[i][j+1] == 9) map[i][j] = 6;
        else if (map[i+1][j] == 9 && map[i][j-1] == 9) map[i][j] = 7;
        else if (map[i-1][j+1] == 9 && map[i-1][j] != 9 && map[i][j+1] != 9) map[i][j] = 10;
        else if (map[i+1][j+1] == 9 && map[i+1][j] != 9 && map[i][j+1] != 9) map[i][j] = 11;
        else if (map[i+1][j-1] == 9 && map[i+1][j] != 9 && map[i][j-1] != 9) map[i][j] = 12;
        else if (map[i-1][j-1] == 9 && map[i-1][j] != 9 && map[i][j-1] != 9) map[i][j] = 13;
      }
    }
  }
  map[5][28] = 7;
  map[5][29] = 8;
  map[5][30] = 8;
  map[5][31] = 8;
  map[5][32] = 8;
  map[5][33] = 6;

}
function fixMapBridge() {
  for (var i = 0; i < texture.length; i++) {
    if (texture[i].img == bridge2) {
      var loc_x = Math.ceil(texture[i].x / 48);
      var loc_y = Math.ceil(texture[i].y / 48);
      map[loc_y][loc_x-1] = 1;
      map[loc_y+1][loc_x-1] = 1;
      map[loc_y][loc_x+1] = 2;
      map[loc_y+1][loc_x+1] = 2;
    }
    if (texture[i].img == bridge) {
      var loc_x = Math.ceil(texture[i].x / 48);
      var loc_y = Math.ceil(texture[i].y / 48);
      map[loc_y-1][loc_x] = 3;
      map[loc_y-1][loc_x+1] = 3;
      map[loc_y+1][loc_x] = 0;
      map[loc_y+1][loc_x+1] = 0;
    }

  }
}

createMapPiz();
createMapPiz2();
fixMap();
}

// WORLD
{

// TEXTURE
{
var texture = [];
function createTexture(x,y,img,du) {
  if (img == tree) {
    texture.push({
      x : x,
      y : y,
      img  : img,
      du : du,
      num : 5
    });
  // } else if (img == bridge) {
  //   texture.push({
  //     x : x,
  //     y : y,
  //     img  : img,
  //     du : du,
  //     fix : false
  //   });
  } else
  texture.push({
    x : x,
    y : y,
    img  : img,
    du : du
  });
}

createTexture(48 * 28,48 * 0 + 1,bigTreeUp,"up");
createTexture(48 * 28,48 * 2,bigTreeDown,"down");

{//add bridge
createTexture(48 * 30,48 * 7,bridge,"down");

createTexture(48 * 29,48 * 24,bridge,"down");
createTexture(48 * 29,48 * 25,bridge,"down");
createTexture(48 * 29,48 * 26,bridge,"down");

createTexture(48 * 53,48 * 13,bridge,"down");
createTexture(48 * 53,48 * 14,bridge,"down");

createTexture(48 * 44,48 * 44,bridge,"down");
createTexture(48 * 44,48 * 45,bridge,"down");
createTexture(48 * 44,48 * 46,bridge,"down");

createTexture(48 * 11,48 * 16,bridge2,"down");
createTexture(48 * 12,48 * 16,bridge2,"down");

createTexture(48 * 41,48 * 18,bridge2,"down");
createTexture(48 * 42,48 * 18,bridge2,"down");

createTexture(48 * 48,48 * 32,bridge2,"down");
createTexture(48 * 49,48 * 32,bridge2,"down");
createTexture(48 * 50,48 * 32,bridge2,"down");

createTexture(48 * 17,48 * 38,bridge2,"down");
createTexture(48 * 18,48 * 38,bridge2,"down");

createTexture(48 * 36,48 * 51,bridge2,"down");
createTexture(48 * 37,48 * 51,bridge2,"down");
createTexture(48 * 38,48 * 51,bridge2,"down");
}

for(var i = 0; i < 60; i++){
  var loc_x = rand(64);
  var loc_y = rand(64);
  while (map[Math.ceil(loc_y)][Math.ceil(loc_x)] != 8) {
    loc_x = rand(64);
    loc_y = rand(64);
  }
  createTexture(loc_x * 48,loc_y * 48,tree,"down");
}

var source = [];
source.push({
  x : (30)*48+24,
  y : (3)*48+24,
  num : 100,
  biome : -6
});
source.push({
  x : (rand(50)+7)*48+24,
  y : (rand(50)+7)*48+24,
  num : 100,
  biome : -5
});

var time = 0;
for (var i = 1; i < 5; i++) {
  var xl = rand(58)+3;
  var yl = rand(58)+3;
  while (map_biome[div(xl,8)][div(yl,8)] != i || map[yl][xl] != 8) {
    xl = rand(64)+0;
    yl = rand(64)+0;
  }
  source.push({
    x : xl * 48+24,
    y : yl * 48+24,
    num : 100,
    biome : map_biome[div(xl,8)][div(yl,8)]
  });
}
function world() {
  time++;
  if (time % 3600 == 0) {
    for (var i = 0; i < mstrs.length; i++) {
      for (var j = 0; j < 4; j++) {
        if (mstrs[i].inven[j] > 0) mstrs[i].inven[j]--;
      }
    }
  }
  for (var i = 0; i < source.length; i++) {
    if (source[i].num <= 0) {
      for (var j = 0; j < mstrs.length; j++) {
        if (mstrs[j].memory[0].x == source[i].x && mstrs[j].memory[0].y == source[i].y) {
          mstrs[j].memory[0].x = 0;
          mstrs[j].memory[0].y = 0;
          mstrs[j].memory[0].biome = 5;
          mstrs[j].memory[0].exactly = false;
        }
        if (mstrs[j].memory[1].x == source[i].x && mstrs[j].memory[1].y == source[i].y) {
          mstrs[j].memory[1].x = 0;
          mstrs[j].memory[1].y = 0;
          mstrs[j].memory[1].biome = 5;
          mstrs[j].memory[1].exactly = false;
        }
        if (mstrs[j].memory[2].x == source[i].x && mstrs[j].memory[1].y == source[i].y) {
          mstrs[j].memory[2].x = 0;
          mstrs[j].memory[2].y = 0;
          mstrs[j].memory[2].biome = 5;
          mstrs[j].memory[2].exactly = false;
        }
      }
      var xl = rand(60)+2;
      var yl = rand(60)+2;
      while (map_biome[div(xl,8)][div(yl,8)] != source[i].biome || map[yl][xl] != 8) {
        xl = rand(60)+2;
        yl = rand(60)+2;
      }
      source.push({
        x : xl * 48+24,
        y : yl * 48+24,
        num : 100,
        biome : map_biome[div(xl,8)][div(yl,8)]
      });
      source.splice(i, 1);
    }
  }
  for (var i = 0; i < mstrs.length; i++) {
    if (mstrs[i].readySpeak > 0) mstrs[i].readySpeak--;
  }
}
}
}

fixMapBridge();

// PLAYER
var player = {
  x : source[0].x,
  y : source[0].y,
  s : true,
  dir : 'd',
  move : false,
  im : 0,
  is : 0,
  purpose : {
    x : source[0].x,
    y : source[0].y,
    goto : -1
  },
  knowend: false,
  //speak
  speak : false,
  with : -1,
  word : [0,0],
  ltr : [],
  wordTime : WT,
  readySpeak : 1200,
  // inventory
  inv : {
    tree : 0
  }
}

var nessy = {
  x : (24)*48+24,
  y : (-0.5)*48+24,
  ns : 2,
  dir : 2,
  s : 0,
  purpose : {
    x : (33)*48+24,
    y : (1)*48+24,
  }
}
// MSTRS
var mstrs = [];
for (var i = 0; i < 25; i++) {
  mstrs.push({
    x : rand(2834)+120,
    y : rand(2834)+120,
    s : rand(3),
    r : true,
    ms : 0.25 * 20,
    purpose : {
      x : rand(2834)+120,
      y : rand(2834)+120,
      know : false
    },
    inven : [rand(5),rand(5),rand(5),rand(5)],
    need : 0,
    memory : [{ x : 0, y : 0, biome : 5, exactly : false },
              { x : 0, y : 0, biome : 5, exactly : false },
              { x : 0, y : 0, biome : 5, exactly : false }],
    // speak
    speak : false,
    first : false,
    with : -1,
    word : [0, 0],
    wordTime : WT,
    readySpeak : rand(1200)
  });
}

function move(e){
  switch (e) {
    case 65:
      if (player.x > 120) {
        player.x-=PS * 4;
        player.purpose.x-=PS * 4;
      }
      player.move = true;
      player.dir = 'l';
      break;
    case 68:
      if (player.x < 2952) {
        player.x+=PS * 4;
        player.purpose.x+=PS * 4;
      }
      player.move = true;
      player.dir = 'r';
      break;
    case 87:
      if (player.y > 120) {
        player.y-=PS * 4;
        player.purpose.y-=PS * 4;
      }
      player.move = true;
      player.dir = 'u';
      break;
    case 83:
      if (player.y < 2952) {
        player.y+=PS * 4;
        player.purpose.y+=PS * 4;
      }
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
      if (mstrs[i].r) {
        return 0;
      } else {
        return 48;
      }
      break;
  }
}
