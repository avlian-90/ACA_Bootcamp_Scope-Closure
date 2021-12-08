// Write a function which remove elements with length <= 3

function filterByLength(arr) {
  const filteredArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 3) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

console.log(filterByLength(["kia", "tesla", "bmw", "mercedes"])); // ['tesla', 'mercedes']
