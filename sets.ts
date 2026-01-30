// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// Set don't allow multiple values, the output will be the same a, b, c
letters.add("c");

console.log(letters);
// output: Set(3) { 'a', 'b', 'c' }