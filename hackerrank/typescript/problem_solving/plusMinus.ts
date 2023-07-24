function plusMinus(arr: number[]): void {
  const sortedArr: number[] = arr.sort();

  let negativeNumbers: number = 0;
  let positiveNumbers: number = 0;
  let zeroNumber: number = 0;

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] < 0) {
      negativeNumbers++;;
    } else if (sortedArr[i] > 0) {
      positiveNumbers++;
    } else {
      zeroNumber++;
    }
  }

  const totalNumbers: number = sortedArr.length;

  console.log((positiveNumbers / totalNumbers).toFixed(6));
  console.log((negativeNumbers / totalNumbers).toFixed(6));
  console.log((zeroNumber / totalNumbers).toFixed(6));
}

console.log(plusMinus([-4, 3, -9, 0, 4, 1]));