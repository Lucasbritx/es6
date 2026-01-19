// es5 way
function printHelloName(name) {
  return "Hello " + name;
}

console.log(printHelloName("Lucas"));
// -> output Hello Lucas

// es6 way

const printHiName = (name) => {
  return `Hi ${name}`;
};

console.log(printHiName("Lucas"));
// -> output Hi Lucas