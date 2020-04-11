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
    if (!mstrs[i].purpose.know) {
      for (var j = 0; j < mstrs.length && i != j && mstrs[i].memory[2].indexOf(j) == -1 && !mstrs[j].speak; j++) {
        var dx = mstrs[i].x - mstrs[j].x;
        var dy = mstrs[i].y - mstrs[j].y;
        if (dx*dx + dy*dy <= 147456) {
          mstrs[i].ms += 1;
          mstrs[i].purpose.x = mstrs[j].x;
          mstrs[i].purpose.y = mstrs[j].y;
        }
        if (dx*dx + dy*dy <= 100) {
          mstrs[i].memory[2].push(j);
          mstrs[i].memory[2].splice(0);
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
      if (cpr(mstrs[mstrs[i].with].word, [0, 0])) {
        mstrs[i].word = Array(5, 3);
      }
      if (cpr(mstrs[mstrs[i].with].word, [5, 3])) {
        mstrs[i].word = Array(6, mstrs[i].need + 8);
      }
    }
    if (mstrs[i].speak && !mstrs[i].first) {// Отвечает
      if (cpr(mstrs[mstrs[i].with].word, [5, 3])) {
        mstrs[i].word = Array(5, 3);
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
function loop() {
  update();
  draw();
  world();
  if (z) requestAnimationFrame(loop);
}
loop();
