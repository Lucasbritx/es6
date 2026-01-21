// ES5
function returnPerson(name: string, age: number) {
  return "Hi " + name + " Your age is " + age + " year old!";
}
console.log(returnPerson("Lucas", 26));
// output: Hi Lucas Your age is 26 year old!

// ES6
const returnPersonES6 = (name: string, age: number) => {
  return `Hi ${name}, your age is ${age} year old!`;
};
console.log(returnPersonES6("Liz", 32));

