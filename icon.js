function computer_border(draw, x = 0, y = 0, w = 0, h = 0, bw = 10) {
  var path = "";

  var cy = y + bw;
  path += ` M ${x} ${cy}`;

  cy = y + h - bw / 2;
  path += ` L ${x} ${cy}`;

  var r = bw / 2;
  var cx = x + bw;
  path += ` A ${r} ${r} 0 0 0 ${cx} ${cy}`;

  cy = y + bw + bw / 2;
  path += ` L ${cx} ${cy}`;
  cx += bw / 2;
  cy -= bw / 2;
  path += `A ${r} ${r} 0 0 1 ${cx} ${cy}`;

  cx = x + w - bw - bw/2;
  cy = y + bw;
  path += ` L ${cx} ${cy}`;
  cx += bw / 2;
  cy += bw / 2;
  path += ` A ${r} ${r} 0 0 1 ${cx} ${cy}`;

  cy = y + h - bw / 2;
  path += ` L ${cx} ${cy}`;
  cx += bw;
  path += ` A ${r} ${r} 0 0 0 ${cx} ${cy}`;
  cy = y + bw;
  path += ` L ${cx} ${cy}`;

  r = bw;
  cx -= bw;
  cy -= bw;
  path += ` A ${r} ${r} 0 0 0 ${cx} ${cy}`;
  cx = x + bw;
  path += `L ${cx} ${y}`;
  cy = y + bw;
  path += `A ${r} ${r} 0 0 0 ${x} ${cy}`;
  draw.path(path).attr({ fill: 'black' });
}

function f(draw, x, y, w, h, bw) {
  var path = "";
  var r = bw / 2;
  var cx = x + bw / 2;
  var cy = y;
  path += ` M ${cx} ${cy}`;
  cx = x;
  cy = y + bw / 2;
  // Top left arc
  path += ` A ${r} ${r} 0 0 0 ${cx} ${cy}`;
  cy = y + h - bw / 2;
  path += ` L ${cx} ${cy}`;
  cx = x + bw;
  // Bottom arc
  path += ` A ${r} ${r} 0 0 0 ${cx} ${cy}`;

  r = bw / 4;
  cy = y + bw + r + ((h - 2*bw) / 2);
  path += ` L ${cx} ${cy}`;
  cy -= r;
  cx += r;
  path += ` A ${r} ${r} 0 0 1 ${cx} ${cy}`;

  cx = x + bw + r + ((w - 2*bw));
  path += ` L ${cx} ${cy}`;

  cy -= bw;
  r = bw / 2;
  path += ` A ${r} ${r} 0 0 0 ${cx} ${cy}`;

  r = bw / 4;
  cx = x + bw + r;
  path += `L ${cx} ${cy}`;
  cy -= r;
  cx -= r;
  path += ` A ${r} ${r} 0 0 1 ${cx} ${cy}`;

  r = bw / 4;
  cx = x + bw;
  cy = y + bw + r;
  path += ` L ${cx} ${cy}`;
  // Inner top left arc
  cx += r;
  cy -= r;
  path += ` A ${r} ${r} 0 0 1 ${cx} ${cy}`;

  cx = x + w - bw / 2;
  path += ` L ${cx} ${cy}`;
  // Top right arc
  cy = y;
  path += ` A ${r} ${r} 0 0 0 ${cx} ${cy}`;

  cx = x + bw / 2;
  path += ` L ${cx} ${cy}`;

  draw.path(path).attr({ fill: 'black' });
}

$().ready(function() {
  var draw = SVG().addTo('body').size(200, 200);
  computer_border(draw, 0, 0, 160, 100, 10);
  f(draw, 30, 30, 40, 60, 10);
});
