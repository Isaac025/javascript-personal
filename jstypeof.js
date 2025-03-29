console.log("John".constructor);
console.log(false.constructor);
console.log((3.14).constructor);
console.log([1, 2, 3, 4].constructor);
console.log(function () {}.constructor);
console.log(new Date().constructor);
console.log({ name: "ade", age: 10 }.constructor);

//You can check the constructor property to find out if an object is an Array (contains the word "Array"):

var fruits = ["orange", "mango", "apple", "cashew", "lemon"];
function isArray(myArray) {
  //   return myArray.constructor.toString().indexOf("Array") > -1;
  return myArray.constructor === Array;
}

console.log(isArray(fruits));

// The global method String() can convert numbers to strings.
var x = 300;
console.log(String(x));

console.log(String(290 + 10));

console.log(Date().toString());

var y = "5";
console.log(typeof y);
var x = +y;
console.log(typeof x);

var y = "John";
console.log(typeof y);
var x = +y;
console.log(x);

d = new Date();
console.log(d.getTime());
console.log(Number(d));
