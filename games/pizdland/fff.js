var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");
ctx.canvas.width  = 800;
ctx.canvas.height = 600;


function update(){
  if (player.x - map_x < 160) {map_x = player.x - 160}
  if (player.x - map_x > 640) {map_x = player.x - 640}
  if (player.y - map_y < 120) {map_y = player.y - 120}
  if (player.y - map_y > 480) {map_y = player.y - 480}
}

function game(){
  ctx.clearRect(0, 0, cvs.width, cvs.height);

  // draw map
  for (var i = 0; i < 20; i++) {
    for (var j = 0; j < 14; j++) {

      var x = div(map_x, 48) * 48 - map_x + 48 * i;
      var y = div(map_y, 48) * 48 - map_y + 48 * j;

      if (map[div(x, 48)][div(y, 48)] == 1) {
        ctx.drawImage(planteaImg,48*3,48*3,48,48, map_x + x,map_y + y, 48, 48);
      } else {
        ctx.drawImage(landImg, x, y);
      }

    }
  }

  // draw player
  ctx.drawImage(playerImg,0,0,48,48, player.x - map_x - 24, player.y - map_y - 24, 48, 48);


}

function seeMap(){}
function speak(){}

$(document.body).on('keydown', function(e) {
  switch (e.which) {
    case 37:
      player.x-=5;
      break;
    case 39:
      player.x+=5;
      break;
    case 38:
      player.y-=5;
      break;
    case 40:
      player.y+=5;
      break;
    }
});

function loop() {
  update();
  game();
  requestAnimationFrame(loop);
}
loop();
