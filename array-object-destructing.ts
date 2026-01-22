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
const { name, famillyName, age } = contacts;
console.log( name, famillyName, age );
// output: Bruno Santos 35