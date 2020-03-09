var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
ctx.canvas.width  = 800;
ctx.canvas.height = 600;

function game(){
  ctx.clearRect(0, 0, cvs.width, cvs.height);

  // draw maps
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 14; j++) {
      var x = div(map_x, 48) * 48 - map_x + 48 * i;
      var y = div(map_y, 48) * 48 - map_y + 48 * j;
      ctx.drawImage(landImg, x, y);
      if (map[div(map_x + x, 48)][div(map_y + y, 48)] == 1) {
        ctx.drawImage(planteaImg,48*3,48*3,48,48, x, y, 48, 48);
      }
    }
  }
  //draw monstrs
  for (var i = 0; i < mstrs.length; i++) {
    ctx.drawImage(poopaImg,s("px",i),s("py",i),48,48, mstrs[i].x - map_x - 24, mstrs[i].y - map_y - 24, 48, 48);
  }

  // draw player
  ctx.drawImage(playerImg,s('x',0),s('y',0),48,48, player.x - map_x - 24, player.y - map_y - 24, 48, 48);

}

function seeMap() {}
function speak() {}

$(document.body).on('keydown', function(e) {move(e.which);});

function loop() {
  update();
  game();
  requestAnimationFrame(loop);
}
loop();
