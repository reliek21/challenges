// https://www.hackerrank.com/challenges/apple-and-orange/problem?isFullScreen=true

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesCounter = 0;
  let orangesCounter = 0;
  
  for (let index = 0; index < apples.length; index++) {
    let sum = apples[index] + a;
    
    if (sum >= s && sum <= t) {
      applesCounter++;
    }
  }
  
  for (let index = 0; index < oranges.length; index++) {
    let sum = oranges[index] + b;
    if (sum >= s && sum <= t) {
      orangesCounter++;
    }
  }
  
  console.log(applesCounter);
  console.log(orangesCounter);
}
