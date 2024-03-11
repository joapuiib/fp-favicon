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

function f(draw, x = 0, y = 0, w = 0, h = 0, mw = 0, bw = 10) {
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

  // Middle bottom arc
  cy = y + h/2 + bw/2;
  path += ` L ${cx} ${cy}`;

  // Middle right arc
  r = bw / 2;
  cx = x + bw + mw - r;
  path += ` L ${cx} ${cy}`;
  cy -= bw;
  path += ` A ${r} ${r} 0 0 0 ${cx} ${cy}`;

  // Middle top arc
  cx = x + bw;
  path += `L ${cx} ${cy}`;

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

function p(draw, x = 0, y = 0, w = 0, h = 0, bw = 10) {
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
  cx = x + bw;
  cy = y + bw + r;
  path += ` L ${cx} ${cy}`;
  // Inner top left arc
  cx += r;
  cy -= r;
  path += ` A ${r} ${r} 0 0 1 ${cx} ${cy}`;

  // Inner right arc
  r = ((h / 2) - bw - (bw / 2)) / 2;
  cx = x + w - bw - r;
  path += ` L ${cx} ${cy}`;
  cy += r * 2;
  path += ` A ${r} ${r} 0 0 1 ${cx} ${cy}`;

  // Inner left arc
  cy += bw;
  r = bw / 2;
  path += ` A ${r} ${r} 0 0 0 ${cx} ${cy}`;

  // Outer right arc
  cy = y;
  r = r + bw;
  path += ` A ${r} ${r} 0 0 0 ${cx} ${cy}`;

  cx = x + bw / 2;
  path += ` L ${cx} ${cy}`;

  draw.path(path).attr({ fill: 'black' });
}

$().ready(function() {
  var draw = SVG().addTo('body').size(200, 200);

  var bw = 10;
  var width = 160;
  computer_border(draw, 0, 0, width, 100, bw);
  var letter_bw = 12;
  var letter_width = 50;
  var letter_height = 80;
  var inner_margin = 15;
  var x = bw + inner_margin;
  var y = bw + inner_margin;
  f(draw, x, y, letter_width, letter_height, 20, letter_bw);
  var letter_margin = width - 2 * (letter_width + inner_margin + bw);
  x += letter_width + letter_margin;
  p(draw, x, y, letter_width, letter_height, letter_bw);

  for (var i = 0; i < width; i+=5) {
    draw.line(i, 0, i, 100).attr({ stroke: 'red', 'stroke-width': 0.2 });
  }
  for (var i = 0; i < 100; i+=5) {
    draw.line(0, i, width, i).attr({ stroke: 'red', 'stroke-width': 0.2 });
  }
  // draw.line(0, 55, 160, 55).attr({ stroke: 'red', 'stroke-width': 1 });
  // draw.line(0, 65, 160, 65).attr({ stroke: 'red', 'stroke-width': 1 });
});
