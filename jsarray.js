var cars = ["Toyota", "Camry", "Mazda"];
document.getElementById("arr").innerHTML = cars instanceof Array;

var cars = ["Toyota", "Camry", "Mazda"];
document.getElementById("arr1").innerHTML = cars[1];

var cars = ["Toyota", "Camry", "Mazda"];
cars[0] = "peagout";
document.getElementById("arr1").innerHTML = cars;

var person = ["John", "Bull", "35 years"];
document.getElementById("arr2").innerHTML = person[0] + "<br>" + typeof person;

var person = {
  firstName: "John",
  lastName: "Bull",
  Age: "35 years",
};
document.getElementById("arr3").innerHTML = person["Age"];

//The length property of an array returns the length of an array (the number of array elements).
var fruits = ["mango", "orange", "banana", "apple"];
document.getElementById("arr4").innerHTML = fruits.length; // the length of fruits is 4

var fruits = ["mango", "orange", "banana", "apple"];
first = fruits[0];
document.getElementById("arr5").innerHTML = first;

var fruits = ["mango", "orange", "banana", "apple"];
last = fruits[fruits.length - 1];
document.getElementById("arr6").innerHTML = last;

// loop array
var fruits, text;
fruits = ["mango", "orange", "banana", "apple"];
text = "<ul>";
fruits.forEach(myFunction);
text += "</ul>";
document.getElementById("arr7").innerHTML = text;

function myFunction(value) {
  text += "<li>" + value + "</li>";
}

// adding array elements
var fruits = ["mango", "orange", "banana", "apple", "guava"];
document.getElementById("arr8").innerHTML = fruits;

function myFunc() {
  fruits.push("lemon");
  document.getElementById("arr8").innerHTML = fruits;
}

var fruits = ["mango", "orange", "banana", "apple", "guava"];
fruits[10] = "lemon";
document.getElementById("arr9").innerHTML = fruits;

function myFruit() {
  fruits[fruits.length] = "coconut";
  document.getElementById("arr9").innerHTML = fruits;
}

// associative array
var person = [];
person[0] = "John";
person[1] = "Bull";
person[2] = "30 years";
person[3] = "brown eyes";
document.getElementById("arr10").innerHTML =
  person[0] +
  " " +
  "with " +
  person[3] +
  " is " +
  person[2] +
  " old" +
  "<br>" +
  person.length +
  "<br>" +
  Array.isArray(person);

// named indexes
/** If you use named indexes, JavaScript will redefine the array to a standard object.
After that, some array methods and properties will produce incorrect results. */
var person = [];
person["firstName"] = "John";
person["lastName"] = "Bull";
person["Age"] = "30 years";
person["eyeColor"] = "brown eyes";
document.getElementById("arr11").innerHTML =
  person[0] +
  " " +
  "with " +
  person[3] +
  " is " +
  person[2] +
  " old" +
  "<br>" +
  person.length;

var sport = ["football", "tennis", "badminton", "Basketball"];
document.getElementById("arr12").innerHTML = sport.toString();

// join() operator
var sport = ["football", "tennis", "badminton", "Basketball"];
document.getElementById("arr13").innerHTML = sport.join(" % ");

//pop and push methods
var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("arr14").innerHTML = fruits;
x = fruits.pop();
document.getElementById("arr15").innerHTML = x + "<br>" + fruits;

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("arr16").innerHTML = fruits;

function rePush() {
  document.getElementById("arr17").innerHTML = fruits.push("kiwi"); // returns the new array length
  document.getElementById("arr16").innerHTML = fruits;
}

// the shift() method
var fr = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("arr18").innerHTML = fr;
fr.shift();
document.getElementById("arr19").innerHTML = fr; // Removes the first element "Banana" from fruits

var sweet = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("arr20").innerHTML = sweet;
document.getElementById("arr21").innerHTML = sweet.shift();
document.getElementById("arr22").innerHTML = sweet;

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("arr23").innerHTML = fruits;
document.getElementById("arr24").innerHTML = fruits.unshift("grape");
document.getElementById("arr25").innerHTML = fruits;

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("arr26").innerHTML = "the first fruit is: " + fruits[0];
delete fruits[0];
document.getElementById("arr27").innerHTML = "the first fruit is: " + fruits[0];

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("arr28").innerHTML =
  "the original array is: " + "<br>" + fruits;
function mySplice() {
  fruits.splice(3, 0, "cashew", "grape", "lemon");
  document.getElementById("arr29").innerHTML = "New Array: " + "<br>" + fruits;
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("arr30").innerHTML = fruits;

function mySplice1() {
  removed = fruits.splice(2, 2, "grape", "cashew", "coconut");
  document.getElementById("arr31").innerHTML = fruits;
  document.getElementById("arr32").innerHTML = removed;
}

var myBoys = ["Bobby", "Cole", "Sessegnon"];
var myGirls = ["priscillia", "Cecelia", "Deborah", "Promise"];
var myChildren = myBoys.concat(myGirls);
document.getElementById("arr33").innerHTML = myChildren;

var arr1 = ["Cecilie", "Lone"];
var arr2 = ["Emil", "Tobias", "Linus"];
var arr3 = ["Robin", "Morgan"];
var myChildren = arr3.concat(arr1, arr2);
document.getElementById("arr34").innerHTML = myChildren;

var arr11 = ["Linus", "Cunha"];
var myPlayers = arr11.concat(["Tosin", "Chalobah", "Diallo"]);
document.getElementById("arr35").innerHTML = myPlayers;

var fruits = ["Banana", "Orange", "Apple", "Mango"];
citrus = fruits.slice(1, 3);
document.getElementById("arr36").innerHTML = fruits + "<br><br>" + citrus;
