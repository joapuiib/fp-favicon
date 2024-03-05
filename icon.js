const w = 160;
const h = 100;

function computer_border(draw, bw = 10) {
  var path = "";
  path += ` M 0 ${bw}`;

  var y = h - bw / 2;
  path += ` L 0 ${y}`;

  var r = bw / 2;
  path += ` A ${r} ${r} 0 0 0 ${bw} ${y}`;

  var x = bw;
  var y = bw + bw / 2;
  path += ` L ${x} ${y}`;
  x += bw / 2;
  y -= bw / 2;
  path += `A ${r} ${r} 0 0 1 ${x} ${y}`;

  x = w - bw - bw/2;
  y = bw;
  path += ` L ${x} ${y}`;
  x += bw / 2;
  y += bw / 2;
  path += ` A ${r} ${r} 0 0 1 ${x} ${y}`;

  var y = h - bw / 2;
  path += ` L ${x} ${y}`;
  x += bw;
  path += ` A ${r} ${r} 0 0 0 ${x} ${y}`;
  y = bw;
  path += ` L ${w} ${y}`;
  r = bw;
  x -= bw;
  y -= bw;
  path += ` A ${r} ${r} 0 0 0 ${x} ${y}`;
  x = bw;
  path += `L ${x} 0`;
  path += `A ${r} ${r} 0 0 0 0 ${bw}`;
  draw.path(path).attr({ fill: 'black' });
}

function f(draw, x, y, w, h, bw) {
  var path = "";
  path += ` M ${x} ${y}`;
  path += ` L ${x+w} ${y}`;
  path += ` L ${x+w} ${y+h}`;
  path += ` L ${x} ${y+h}`;
  path += ` L ${x} ${y}`;
  draw.path(path).attr({ fill: 'black' });
}

$().ready(function() {
  var draw = SVG().addTo('body').size(w, h);
  computer_border(draw, 10);
  f(draw, 20, 20, 20, 20, 10);
});
