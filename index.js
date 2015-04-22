
/**
 * @name wavepot
 */
var TAU = 2.0 * Math.PI;
function sin(t, f) {
  return Math.sin(t * f * TAU);
}
function square(t, f) {
  return Math.sign(Math.sin(t * f * TAU));
}
function saw(t, f) {
  var period = 1.0 / f;
  return 2.0 * ((t / period) - Math.floor((1.0 / 2.0) + (t / period)));
}
export function dsp(t) {
  return saw(t, 440) * sin(t, 440);
}
