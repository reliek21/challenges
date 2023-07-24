function twoSum(nums: number[], target: number): number[] | null {
  const numIndexMap: { [key: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (complement in numIndexMap) {
      return [numIndexMap[complement], i];
    }
    numIndexMap[nums[i]] = i;
  }

  return null;
}

const nums: number[] = [2, 7, 11, 15];
const target: number = 9;

const result = twoSum(nums, target);
console.log(result);
