// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

export function grow(arr: number[]): number {
  return arr.reduce((acc, current) => acc * current);
}

console.log(grow([1, 2, 3, 4]));



// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24