//Write a JavaScript program to construct the following pattern, using a nested for loop.
let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);

// output:
// *
// **
// ***
// ****
// *****
