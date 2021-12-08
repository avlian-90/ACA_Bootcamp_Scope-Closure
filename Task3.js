/* Write a function that returns an anonymous function, which transforms its input by adding a
particular suffix at the end. */

function add_suffix(suffix) {
  return function (str) {
    return str + suffix;
  };
}

add_ly = add_suffix("ly");
console.log(add_ly("hopeless")); // "hopelessly"
console.log(add_ly("total")); // "totally"
add_less = add_suffix("less");
console.log(add_less("fear")); // "fearless"
console.log(add_less("ruth")); // "ruthless"
