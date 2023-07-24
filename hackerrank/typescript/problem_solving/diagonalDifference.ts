function diagonalDifference(arr: number[][]): number {
  let firstNumber: number = 0;
  let secondNumber: number = 0;
  
  for(let i = 0; i < arr.length; i++) {
    firstNumber += arr[i][i];
    secondNumber += arr[i][arr.length - 1 - i];
  }
  
  const result: number = Math.abs(secondNumber - firstNumber);
  
  return result;
}

const arrSum: number[] = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

for(let i = 0; i < arrSum.length; i++) {
  console.log(arrSum[i][arrSum.length - 1 - i])
}

console.log(diagonalDifference(arrSum));