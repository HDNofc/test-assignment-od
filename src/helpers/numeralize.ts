// @ts-nocheck
export const numeralize = (number: number) => {
  let n = number;

  if (n === 40) {
    return 'ой';
  }

  if (n > 20) {
    n = n.toString();
    n = parseInt(n[[n.length - 1]]);
    n = n === 0 ? 1 : n;
  }

  if (n === 1 || n === 4 || n === 5 || n === 9 || (n >= 10 && n <= 20)) {
    return 'ый';
  }
  if (n === 2 || n === 6 || n === 7 || n === 8) {
    return 'ой';
  }
  if (n === 3) {
    return 'ий';
  }
};
