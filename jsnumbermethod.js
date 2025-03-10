var x = 6;
var y = 7.15;
document.getElementById("demo").innerHTML = x + "<br>" + y;

var b = 125e5;
var c = 125e-5;
document.getElementById("demo1").innerHTML = b + "<br>" + c;

// Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
var d = 999999999999999; // d is equal to 999999999999999
var e = 9999999999999999; // e is equal to 100000000000000000
document.getElementById("demo2").innerHTML = d + "<br>" + e;

//The maximum number of decimals is 17, but floating point arithmetic is not always 100% accurate:
var x = 0.2 + 0.1;
document.getElementById("demo3").innerHTML = x;

var j = (0.2 * 10 + 0.1 * 10) / 10;
document.getElementById("demo4").innerHTML = "0.2 + 0.1 = " + j;

var h = "22";
var i = "17";
var k = h + i;
document.getElementById("demo5").innerHTML = k;

//JavaScript will try to convert strings to numbers in all numeric operations:
var l = "1000";
var n = "10";
document.getElementById("demo6").innerHTML = l * n;

var l = "1000";
var n = "10";
document.getElementById("demo7").innerHTML = l - n;

var x = 100 / "apple";
document.getElementById("demo8").innerHTML = isNaN(x) + "<br>" + typeof x; // will return true

/* if the string contains a numeric value, the value will be a number  */
document.getElementById("demo9").innerHTML = 100 / "1000";

var myNumber = 3;
txt = " ";
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  txt = txt + myNumber + "<br>";
}
document.getElementById("demo10").innerHTML = txt;

var x = 2 / 0; // returns infinity
var y = -2 / 0; // returns -infinity
document.getElementById("demo11").innerHTML =
  x + "<br>" + y + "<br>" + typeof x + "<br>" + typeof y;

var x = 0xbb;
document.getElementById("demo12").innerHTML = "0xbb = " + x;

var myNumber = 39;
document.getElementById("demo13").innerHTML =
  "39 = " +
  "<br>" +
  "Decimal " +
  myNumber.toString(10) +
  "<br>" +
  "Hexadecimal " +
  myNumber.toString(16) +
  "<br>" +
  "Octal " +
  myNumber.toString(8) +
  "<br>" +
  "Decimal " +
  myNumber.toString(2);

var x = 500;
var y = new Number(500);
document.getElementById("demo14").innerHTML = x === y;

// number methods and properties

var x = 531;
document.getElementById("demo15").innerHTML =
  x.valueOf() + //returns 531 from variable x
  "<br>" +
  (531).valueOf() + //returns 531 from literal 531
  "<br>" +
  (500 + 31).valueOf(); //returns 531 from expression (500 + 31)

var m = 8.656;
var n = m.toExponential();
var o = m.toExponential(2);
var p = m.toExponential(4);
var q = m.toExponential(7);
document.getElementById("demo16").innerHTML =
  n + "<br>" + o + "<br>" + p + "<br>" + q;

var m = 8.656;
var n = m.toFixed(0);
var o = m.toFixed(2);
var p = m.toFixed(4);
var q = m.toFixed(7);
document.getElementById("demo17").innerHTML =
  n + "<br>" + o + "<br>" + p + "<br>" + q;

// toPrecision() returns a string, with a number written with a specified length
var m = 8.656324;
var n = m.toPrecision();
var o = m.toPrecision(2);
var p = m.toPrecision(4);
var q = m.toPrecision(7);
document.getElementById("demo18").innerHTML =
  n + "<br>" + o + "<br>" + p + "<br>" + q;

document.getElementById("demo19").innerHTML =
  Number(true) + // returns 1 +
  "<br>" +
  Number(false) + // returns 0 +
  "<br>" +
  Number("10") + // returns 10 +
  "<br>" +
  Number("10  ") + // returns 10 +
  "<br>" +
  Number("  10") + // returns 10 +
  "<br>" +
  Number(" 10  ") + // returns 10 +
  "<br>" +
  Number("10.33") + // returns 10.33 +
  "<br>" +
  Number("10,33") + // returns NaN +
  "<br>" +
  Number("10 33") + // returns NaN +
  "<br>" +
  Number("John"); // returns NaN

var b = new Date("2019-02-16");
document.getElementById("demo20").innerHTML = Number(b);
// The Number() method above returns the number of milliseconds since 1.1.1970.

document.getElementById("demo21").innerHTML =
  parseInt("10") +
  "<br>" +
  parseInt("10.33") +
  "<br>" +
  parseInt("10 6") +
  "<br>" +
  parseInt("10 years") +
  "<br>" +
  parseInt("years 10");

document.getElementById("demo22").innerHTML =
  parseFloat("10") +
  "<br>" +
  parseFloat("10.33") +
  "<br>" +
  parseFloat("10 6") +
  "<br>" +
  parseFloat("10 years") +
  "<br>" +
  parseFloat("years 10");

var h = Number.MAX_VALUE;
document.getElementById("demo23").innerHTML = h;

var l = Number.MIN_VALUE;
document.getElementById("demo24").innerHTML = l;

document.getElementById("demo25").innerHTML = Number.POSITIVE_INFINITY;

document.getElementById("demo26").innerHTML = Number.NaN;
