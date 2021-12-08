/* Determine if a word or phrase is an isogram. An isogram (also known as a "non pattern word") is a
word or phrase without a repeating letter. */

function isIsogram(str) {
  let arr = str.split("");
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] !== " " && arr[j] !== " " && arr[i] === arr[j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(isIsogram("I am Den"));
