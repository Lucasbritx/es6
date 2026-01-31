const entriesFruits = ["Banana", "Orange", "Apple", "Mango"];
const f = entriesFruits.entries();
let entriesText = "";
for (let x of f) {
  entriesText += x;
}

console.log(entriesText);
// output 0,Banana1,Orange2,Apple3,Mango