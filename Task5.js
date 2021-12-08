// Write a function that implements filtering in array

function filterFalsyValues(arr) {
  const truthyValues = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyValues.push(arr[i]);
    }
  }
  return truthyValues;
}

const values = [null, true, {}, { name: "Elon" }, "", NaN, 0];
console.log(filterFalsyValues(values)); // [true, {}, { name: "Elon" }];
console.log(filterFalsyValues(["hello", 1233, []])); // ['hello', 1233, []]
