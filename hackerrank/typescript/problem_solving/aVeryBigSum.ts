function aVeryBigSum(ar: number[]): number {
  let newSum = BigInt(0);
  
  for (let i = 0; i < ar.length; i++) {
    newSum += BigInt(ar[i]);
  }
  
  return Number(newSum);
}

const arrSum: number[] = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(arrSum));