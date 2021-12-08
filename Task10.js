// Check whether string is palindrome, or not.

function isPalindrome(str) {
  let reversedStr = str.split("").reverse().join();
  let str1 = str.split("").join();
  if (reversedStr === str1) {
    return true;
  }
  return false;
}

console.log(isPalindrome("katak"));
