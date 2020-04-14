var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
ctx.canvas.width  = 800;
ctx.canvas.height = 600;

function draw(){
  ctx.clearRect(0, 0, cvs.width, cvs.height);

  // draw maps
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 14; j++) {
      var x = div(map_x, 48) * 48 - map_x + 48 * i;
      var y = div(map_y, 48) * 48 - map_y + 48 * j;
      ctx.drawImage(landImg, x, y);
      if (map[div(map_x + x, 48)][div(map_y + y, 48)] == 5) {
        ctx.drawImage(planteaImg,0,48*2,48,48, x, y, 48, 48);
      }
    }
  }

  //draw source
  for (var i = 0; i < source.length; i++) {
    ctx.drawImage(planteaImg,48 * (source[i].biome - 1),48 * 3,48,48, source[i].x - map_x - 24, source[i].y - map_y - 24, 48, 48);
  }

  //draw monstrs
  for (var i = 0; i < mstrs.length; i++) {
    ctx.drawImage(poopaImg,s("px",i),s("py",i),48,48, mstrs[i].x - map_x - 24, mstrs[i].y - map_y - 24, 48, 48);
  }

  // draw player
  ctx.drawImage(playerImg,s('x',0),s('y',0),48,48, player.x - map_x - 24, player.y - map_y - 24, 48, 48);

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

  for (var i = 0; i < mstrs.length; i++) {

    for (var j = 0; j < 4; j++) {
      if (mstrs[i].inven[j] < mstrs[i].inven[mstrs[i].need]) {
        mstrs[i].need = j;
      }
    }

    for (var j = 0; j < source.length; j++) {
      var dx = mstrs[i].x - source[j].x;
      var dy = mstrs[i].y - source[j].y;
      if (dx*dx + dy*dy <= 147456) {
        if (source[j].biome != mstrs[i].memory[0].biome && source[j].biome != mstrs[i].memory[1].biome) {
          mstrs[i].memory[1].biome = mstrs[i].memory[0].biome;
          mstrs[i].memory[1].x = mstrs[i].memory[0].x;
          mstrs[i].memory[1].y = mstrs[i].memory[0].y;
          mstrs[i].memory[0].biome = source[j].biome;
          mstrs[i].memory[0].x = source[j].x;
          mstrs[i].memory[0].y = source[j].y;
        }
      }
    }
    if (mstrs[i].need+1 == mstrs[i].memory[0].biome) {
      mstrs[i].purpose.x = mstrs[i].memory[0].x;
      mstrs[i].purpose.y = mstrs[i].memory[0].y;
      mstrs[i].purpose.know = true;
    }
    if (mstrs[i].need+1 == mstrs[i].memory[1].biome) {
      mstrs[i].purpose.x = mstrs[i].memory[1].x;
      mstrs[i].purpose.y = mstrs[i].memory[1].y;
      mstrs[i].purpose.know = true;
    }
    if (!mstrs[i].purpose.know && chek() == 0) {

      for (var j = 0; j < mstrs.length && mstrs[i].memory[2].indexOf(j) == -1 && !mstrs[j].speak; j++) {
        if (i == j) j++;
        if (j == 25) break;
        var dx = mstrs[i].x - mstrs[j].x;
        var dy = mstrs[i].y - mstrs[j].y;
        if (dx*dx + dy*dy <= 147456) {
          mstrs[i].ms += 1;
          mstrs[i].purpose.x = mstrs[j].x;
          mstrs[i].purpose.y = mstrs[j].y;
        }
        if (dx*dx + dy*dy <= 100) {
          mstrs[i].memory[2].push(j);
          mstrs[i].speak = true;
          mstrs[j].speak = true;
          mstrs[i].first = true;
          mstrs[j].first = false;
          mstrs[i].with = j;
          mstrs[j].with = i;
        }
      }
    }
    if (mstrs[i].speak && mstrs[i].first) { //Спрашивает
      // z = false;
      if (cpr(mstrs[mstrs[i].with].word, [0, 0])) {
        mstrs[i].word = Array(5, 3);
      } else
      if (cpr(mstrs[mstrs[i].with].word, [5, 3])) {
        mstrs[i].word = Array(6, mstrs[i].need + 8);
      } else
      if (cpr(mstrs[mstrs[i].with].word, [7, 0])) {
        mstrs[mstrs[i].with].speak = false;
        mstrs[mstrs[i].with].word = [0, 0];
        mstrs[mstrs[i].with].with = -1;
        mstrs[i].speak = false;
        mstrs[i].with = -1;
        mstrs[i].word = [0, 0];
        mstrs[i].first = false;
        console.log("no know");
        for (var j = 0; j < mstrs.length; j++) {
          if (i != j) mstrs[j].memory[2].push(i);
          if (mstrs[i].with != j) mstrs[j].memory[2].push(mstrs[i].with);
        }
      } else
      if (mstrs[mstrs[i].with].word[0] > numWord) {
        console.log(i,mstrs[i].with);
        // z = false;

        var xl = mstrs[mstrs[i].with].word[0] - numWord - 1;
        var yl = mstrs[mstrs[i].with].word[1] - numWord - 9;
        xl = (xl * 8 + 4) * 48;
        yl = (yl * 8 + 4) * 48;
        mstrs[i].memory[1].x = mstrs[i].memory[0].x;
        mstrs[i].memory[1].y = mstrs[i].memory[0].y;
        mstrs[i].memory[1].biome = mstrs[i].memory[0].biome;
        mstrs[i].memory[0].x = xl;
        mstrs[i].memory[0].y = yl;
        mstrs[i].memory[0].biome = mstrs[i].need + 1;
        mstrs[mstrs[i].with].speak = false;
        mstrs[mstrs[i].with].word = [0, 0];
        mstrs[mstrs[i].with].with = -1;
        mstrs[i].speak = false;
        mstrs[i].with = -1;
        mstrs[i].word = [0, 0];
        mstrs[i].first = false;
        console.log("know");
      }

    }

    if (mstrs[i].speak && !mstrs[i].first) {// Отвечает
      if (cpr(mstrs[mstrs[i].with].word, [5, 3])) {
        mstrs[i].word = Array(5, 3);
      } else
      for (var j = 8; j < 12; j++) {
        if (cpr(mstrs[mstrs[i].with].word, [6, j])) {
          if (mstrs[i].memory[0].biome + 7 == j) {
            var xl = div(div(mstrs[i].memory[0].x, 48), 8);
            var yl = div(div(mstrs[i].memory[0].y, 48), 8);
            mstrs[i].word = Array(numWord + xl + 1, numWord + yl + 9);
          } else if (mstrs[i].memory[1].biome == j) {
            var xl = div(div(mstrs[i].memory[1].x, 48), 8);
            var yl = div(div(mstrs[i].memory[1].y, 48), 8);
            mstrs[i].word = Array(numWord + xl + 1, numWord + yl + 9);
          } else {
            mstrs[i].word = Array(7, 0);

          }
        }

      }

    }


    if (!mstrs[i].speak) {
      for (var j= 0; j < source.length; j++) {
        var dx = mstrs[i].x - source[j].x;
        var dy = mstrs[i].y - source[j].y;
        if (dx*dx + dy*dy < 100 && source[j].biome == mstrs[i].need+1) {
          source[j].num -= 5 - mstrs[i].inven[mstrs[i].need];
          mstrs[i].inven[mstrs[i].need] = 5;
        }
      }
      var dx = Math.abs(mstrs[i].x - mstrs[i].purpose.x);
      var dy = Math.abs(mstrs[i].y - mstrs[i].purpose.y);
           if (mstrs[i].x < mstrs[i].purpose.x && dx > 6) { mstrs[i].x += mstrs[i].ms; mstrs[i].r = true;  }
      else if (mstrs[i].x > mstrs[i].purpose.x && dx > 6) { mstrs[i].x -= mstrs[i].ms; mstrs[i].r = false; }
      else if (mstrs[i].y < mstrs[i].purpose.y && dy > 6) mstrs[i].y += mstrs[i].ms;
      else if (mstrs[i].y > mstrs[i].purpose.y && dy > 6) mstrs[i].y -= mstrs[i].ms;
      mstrs[i].ms = MS;
      if (dx < 8 && dy < 8) {
        mstrs[i].purpose.x = rand(2834)+120;
        mstrs[i].purpose.y = rand(2834)+120;
        mstrs[i].purpose.know = false;
      }
    }
  }
}

function seeMap() {}
function speak() {


}

$(document.body).on('keydown', function(e) {move(e.which);});
var z = true;
function u() {
  z = false;
}
function g() {
  z = true;
  loop();
}
function t() {
  z = true;
}
function deb() {
  sp();
  var m1 = kkk[0];
  var m2 = kkk[1];
  if (mstrs[m1].first) console.log("ooooo");
  else console.log("xxxxx");
  m(m1);
  m(m2);
  g();
  m(m1);
  m(m2);
  g();
  m(m1);
  m(m2);
  g();
}
function loop() {
  update();
  draw();
  world();
  if (z) requestAnimationFrame(loop);
}
loop();
