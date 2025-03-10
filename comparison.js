var x = 5;
console.log(x == 8);
console.log(x == 5);
console.log(x == "5");
console.log(x === 8);
console.log(x === 5);
console.log(x === "5");

let y = 10;
console.log(y != 8);
console.log(y !== 10);
console.log(y !== "5");
console.log(y !== 8);

// !== not equal in value or type
//used in conditional statements to compare values and take action depending on the result:
let c = 8;
let r = 2;
console.log(c < 12 && r > 0.5);

let b = 15;
let s = 10;
console.log(b == 5 || s == 5);
console.log(b == 5 || s == 10);

var x = 6;
var h = 12;
console.log(!(x === h), !(h > x));

// conditional ternary operators (e.g. ?)
//JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.
function myFunction() {
  var age, voteable;
  age = document.getElementById("age").value;
  if (isNaN(age)) {
    voteable = "input is not a number";
  } else {
    voteable = age < 18 ? "Too Young" : "Old enough";
  }
  document.getElementById("demo").innerHTML = voteable;
}

/**
  An empty string converts to 0. A non-numeric string converts to NaN which is always false.
 */
