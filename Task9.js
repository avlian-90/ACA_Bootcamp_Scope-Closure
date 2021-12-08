// Given an array of numbers. Find the sum of numbersʼ quadratic which are even.

function getSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      sum += arr[i] * arr[i];
    }
  }
  return sum;
}

console.log(getSum([6, 4, 7, 2, 1, 3]));
