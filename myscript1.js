// document.write(6 + 7);
// window.alert(10 + 17);
// console.log(18 + 19);

var x, y, z; //statement 1
x = 4; // statement 2
y = 7; // statement 3
z = x + y; // statement 4
document.getElementById("num").innerHTML = "the value of z is: " + z;

var a,
  b, // declare 3 variables
  a = 19; // assign the value of 19 to a
b = 21; // assign the value of 21 to b
// c = a * b; // assign the product of a and b to c
document.getElementById("num1").innerHTML = a * b;

var a, b, c;
(a = 5), (b = 6), (c = a + b); //multiple statementsn on one line
document.getElementById("num2").innerHTML = c;

function myfunc() {
  document.getElementById("num2").innerHTML = (100 + 50) * 3;

  document.getElementById("num3").innerHTML = "Have faith";
}

document.getElementById("num4").innerHTML = (9 * 100) / 11;
var x = 5;
document.getElementById("num5").innerHTML = (x * 10) / 2;

// javascript expressions
document.getElementById("num6").innerHTML =
  "akano" + " " + "isaac" + " " + "Olayiwola";
// javascript keywords
var x, y;
x = 10 + 15;
y = x * 10;
document.getElementById("num7").innerHTML = y;
// alert(y);

// case sensitive
var firstname, firstName;
firstname = "Olayiwola";
firstName = "Isaac";
document.getElementById("num8").innerHTML = firstName;

// just like algebra
var $price1, $price2, total;
$price1 = 10;
$price2 = 22;
total = $price1 + $price2;
document.getElementById("num9").innerHTML = "the total price is " + total + "";

// javascript data types
var x = 3.14 + 6.23;
var x;
var y = "John" + 72;
var z = "8" + 10;
document.getElementById("num10").innerHTML = x + "<br>" + y + "<br>" + z;

// many variables in one statement
var x = 10;
x += 3;

var y = 4;
var z = x + y;
document.getElementById("num11").innerHTML = z;

// concatenation of strings
var txt1 = "The capital city of";
txt1 += " Nigeria is Abuja";
document.getElementById("num12").innerHTML = txt1;

var a = 3;
var x = (100 + 50) ** a;
document.getElementById("num13").innerHTML = x;

var x = 7,
  y = Math.pow(x, 2);
document.getElementById("num14").innerHTML = y;
