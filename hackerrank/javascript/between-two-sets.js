// https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

function getTotalX(a, b) {
  let count = 0;
  
  let maxA = Math.max(...a);
  let minB = Math.min(...b);
  
  for (let x = maxA; x <= minB; x++) {
    if (a.every(num => x % num === 0) && b.every(num => num % x === 0)) {
      count++;
    }
  }
  
  return count;
}
