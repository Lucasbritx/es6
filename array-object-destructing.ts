// ES5 syntx
/* const contacts = {
    name: 'Bruno',
    famillyName: 'Santos',
    age: 35
}

let name=contacts.name;
let famillyName=contacts.famillyName;
let myAge=contacts.age;
console.log(name)
console.log(famillyName)
console.log(myAge) */
// output:
/* Bruno
Santos
35 */

// ES6 syntax
const contacts = {
  name: "Bruno",
  famillyName: "Santos",
  age: 35,
};
const { name: otherName, famillyName, age } = contacts;
console.log(otherName, famillyName, age);
// output: Bruno Santos 35

const Arr = ["Lionel", "Messi", "Cristiano"];

const [value1, value2, value3] = Arr;

console.log(value1, value2, value3);
// output: Lionel Messi Cristiano