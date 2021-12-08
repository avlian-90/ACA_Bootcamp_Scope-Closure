// Given an array. Determine whether it consists only from uniques or not.

function isUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}
console.log(isUnique([1, 2, 3, 1, 5, 6]));
