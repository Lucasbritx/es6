// very similar to dictionary
// map keys can be any type (string, number, objects, etc)
// remembers the original insertion order


// creating a map with initial values
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

console.log(fruits);
// output: Map(3) { 'apples' => 500, 'bananas' => 300, 'oranges' => 200 }


// inserting new values
fruits.set("mangos", 100);

console.log(fruits);
/* output: Map(4) {
  'apples' => 500,
  'bananas' => 300,
  'oranges' => 200,
  'mangos' => 100
} */

// changing values
fruits.set("apples", 200);
console.log(fruits);
/* output: Map(4) {
  'apples' => 200,
  'bananas' => 300,
  'oranges' => 200,
  'mangos' => 100
} */

console.log(fruits.get("apples"))    // output: 200

// map are objects
console.log(typeof fruits);
// output: object

// Returns true:
fruits instanceof Map;

console.log(fruits.size);
// output: 4

fruits.delete("apples");

console.log(fruits);
// output: Map(3) { 'bananas' => 300, 'oranges' => 200, 'mangos' => 100 }

console.log("Has apples: ", fruits.has("apples"));
//output: Has apples:  false

console.log("Has bananas: ", fruits.has("bananas"));
//output: Has bananas: true

let text = "";
fruits.forEach (function(value, key) {
  text += key + ' = ' + value;
})

console.log(text)
//output: bananas = 300oranges = 200mangos = 100


let textEntries = "";
for (const x of fruits.entries()) {
  textEntries += x;
}
console.log(textEntries);
// output: bananas,300oranges,200mangos,100

let textKeys = "";
for (const x of fruits.keys()) {
  textKeys += x;
}
console.log(textKeys);
// output: bananasorangesmangos

let textValues = "";
for (const x of fruits.values()) {
  textValues += x;
}
console.log(textValues);
//output: 300200100

// Sum all values
let total = 0;
for (const x of fruits.values()) {
  total += x;
}
console.log(total);
// output: 600

fruits.clear();
console.log(fruits);
// output: Map(0) {}