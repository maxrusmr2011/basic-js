module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let move = Math.pow(2, disksNumber) - 1;
  let speed = move / (turnsSpeed / 3600);
  return { turns: move, seconds: speed };
}