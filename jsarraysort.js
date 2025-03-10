var cars = [
  "Toyota",
  "Mazda",
  "Honda",
  "Camry",
  "Lexus",
  "Volvo",
  "25",
  "1000",
];
document.getElementById("demo1").innerHTML = cars;

function arraySort() {
  // first sort an array
  cars.sort();
  // then reverse it
  cars.reverse();
  document.getElementById("demo1").innerHTML = cars;
}

var points = [10, 25, 15, 63, 150, 32, 100];
document.getElementById("demo2").innerHTML = points;

function myFunction() {
  points.sort(function (a, b) {
    return b - a; // for descendiong order
  });
  document.getElementById("demo2").innerHTML = points;
}

// comparing numerically and alphabatically
var points = [10, 25, 15, 63, 150, 32, 100];
document.getElementById("demo3").innerHTML = points;

function myFunction1() {
  points.sort();
  document.getElementById("demo3").innerHTML = points;
}

function myFunction2() {
  points.sort(function (a, b) {
    return a - b;
  });
  document.getElementById("demo3").innerHTML = points;
}

var points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo4").innerHTML = points;

function myFunction3() {
  points.sort(function (a, b) {
    return 0.5 - Math.random();
  });
  document.getElementById("demo4").innerHTML = points;
}

//finding max and min values
var points = [10, 25, 15, 63, 150, 32, 100];
points.sort(function (a, b) {
  return a - b;
});
document.getElementById("demo5").innerHTML = points[0];

var points = [10, 25, 15, 63, 150, 32, 100];
points.sort(function (a, b) {
  return a - b;
});
document.getElementById("demo6").innerHTML = points[points.length - 1];

var points = [10, 25, 15, 63, 150, 32, 100];
document.getElementById("demo7").innerHTML = myArrayMax(points);

function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

var points = [10, 25, 15, 63, 150, 32, 100];
document.getElementById("demo8").innerHTML = myArrayMin(points);
function myArrayMin(arr) {
  return Math.min.apply(null, arr);
}

var cars = [
  { type: "lexus", year: 2016 },
  { type: "Toyota", year: 2003 },
  { type: "Honda", year: 2007 },
];

displaycars();

function myFunction4() {
  cars.sort(function (a, b) {
    return a.year - b.year;
  });
  displaycars();
}

function displaycars() {
  document.getElementById("demo9").innerHTML =
    cars[0].type +
    " " +
    cars[0].year +
    "<br>" +
    cars[1].type +
    " " +
    cars[1].year +
    "<br>" +
    cars[2].type +
    " " +
    cars[2].year;
}

var txt = "";
var numbers = [49, 31, 22, 4, 16];
numbers.forEach(myFunc);
document.getElementById("demo10").innerHTML = txt;

function myFunc(value, index, array) {
  txt = txt + value + "<br>";
}

var txt = "";
var number = [30, 21, 28, 46, 82];
number.forEach(myIt);
document.getElementById("demo11").innerHTML = txt;

function myIt(value) {
  txt = txt + value + "<br>";
}

var number1 = [22, 31, 56, 71, 90];
var number2 = number1.map(theFucntion6);
document.getElementById("demo12").innerHTML = number2;

function theFucntion6(value, index, array) {
  return value * 2;
}

var numbers1 = [30, 21, 14, 7, 88, 24, 82, 17, 34];
var numbers2 = numbers1.filter(myFil);
document.getElementById("demo13").innerHTML = numbers2;

function myFil(value) {
  return value < 30;
}

var numbers1 = [31, 26, 72, 13, 10, 4, 6, 25];
numbers2 = numbers1.reduceRight(reduu, 30);
document.getElementById("demo14").innerHTML = numbers2;

function reduu(total, value) {
  return total + value;
} // index and array arguments removed

var numbers = [21, 30, 10, 6, 3, 30, 22];
numberss = numbers.every(eve);
document.getElementById("demo15").innerHTML = numberss;

function eve(value, index, array) {
  return value * 2 > 50;
}

// some() method check if some array values pass a test
var numbers = [21, 30, 10, 6, 3, 35, 22];
somegreaterthan50 = numbers.some(som);
document.getElementById("demo16").innerHTML = somegreaterthan50;

function som(value) {
  return value * 2 > 50;
}

var fruits = ["Apple", "Orange", "Apple", "Mango"];
a = fruits.indexOf("Mango");
document.getElementById("demo17").innerHTML =
  "Orange is found in position " + a;

var num = [4, 9, 15, 26, 25, 29];
nums = num.find(fin);
document.getElementById("demo17").innerHTML =
  "the first number over 18 is " + nums;

function fin(value, index, array) {
  return value > 18;
}

var num = [4, 9, 15, 26, 25, 29];
nums1 = num.findIndex(finInd);
document.getElementById("demo17").innerHTML =
  "the first number over 18 as an index of " + nums1;

function finInd(value, index, array) {
  return value > 18;
}
