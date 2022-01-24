/**
 * Generates a random number between a minimum and maximum
 * @param {number} minimum - the minimum value included
 * @param {number} maximum - the maximum value excluded
 */
export const random = (min = 0, max = 1) => {
  return Math.random() * (max - min) + min;
};

export function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex --;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
