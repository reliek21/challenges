function miniMaxSum(arr: number[]): void {
  let minSum: number = arr[0];
  let maxSum: number = arr[0];
  let totalSum: number = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];

    if (arr[i] < minSum) {
      minSum = arr[i];
    }

    if (arr[i] > maxSum) {
      maxSum = arr[i];
    }
  }

  const minSumResult = totalSum - maxSum;
  const maxSumResult = totalSum - minSum;

  console.log(minSumResult, maxSumResult);
}

const array: number[] = [1, 2, 3, 4, 5];
miniMaxSum(array);