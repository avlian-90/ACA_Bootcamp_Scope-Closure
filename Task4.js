// Create a function printAfter that calls its argument after printing hello world

function printAfter(cb) {
  console.log("hello, world");
  cb();
}

const print = () => console.log("Elon Musk");
console.log(printAfter(print));
// 'hello, world'
// 'Elon Musk'
