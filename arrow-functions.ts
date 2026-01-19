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

// map, filter and reduce with arrow functions:

const names = ['Lucas', 'Henrique', 'Luiz', 2];

const namesReturnMap = names.map((name)=> {
    return name;
})

console.log(namesReturnMap);
// -> output [ 'Lucas', 'Henrique', 'Luiz', 2 ]