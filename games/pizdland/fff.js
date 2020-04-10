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
      } else {
        if (map[div(map_x + x, 48)][div(map_y + y, 48)] != 0) {
          var biome = map_biome[div(map_x + x, 384)][div(map_y + y, 384)] - 1;
          ctx.drawImage(planteaImg,48*biome,48*3,48,48, x, y, 48, 48);
        }
      }
    }
  }

  //draw source
  for (var i = 0; i < source.length; i++) {
    ctx.drawImage(planteaImg,s("px",i),s("py",i),48,48, mstrs[i].x - map_x - 24, mstrs[i].y - map_y - 24, 48, 48);
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
    if (mstrs[i].x < mstrs[i].purpose.x) mstrs[i].x += ms;
    else if (mstrs[i].x > mstrs[i].purpose.x) mstrs[i].x -= ms;
    else if (mstrs[i].y < mstrs[i].purpose.y) mstrs[i].y += ms;
    else if (mstrs[i].y > mstrs[i].purpose.y) mstrs[i].y -= ms;
  }
}

function seeMap() {}
function speak() {}

$(document.body).on('keydown', function(e) {move(e.which);});

function loop() {
  update();
  draw();
  world();
  requestAnimationFrame(loop);
}
loop();
