function myFunction() {
  document.getElementById("demo1").innerHTML =
    "specialists in repair and electrical parts";

  document.getElementById("demo4").innerHTML =
    "Contact us on telephone: 0813475783";
}

/*document.write(5 + 6);
 document.getElementById("demo").innerHTML = 3 + 7;
 window.alert(300899 * 47876);
 console.log(555 + 5);*/

var x, y, z; // statement 1
x = 5; // statement 2
y = 6; // statement 3
z = x + y; // statement 4

document.getElementById("demo2").innerHTML = "the value of z is: " + z;
var a, b, c; // assign 3 variables
a = 3; // assign the value 3 to a
b = 10; // assign the value 10 to b
c = a * b; // the multiple of a and b equals c
document.getElementById("demo3").innerHTML = "the value of c is " + c + "";

/* var a;
 a = 56.7;
 document.getElementById("demo5").innerHTML = a; */
// document.getElementById("demo5").innerHTML = 12 + 7 * 5;
var $name1 = "Olayiwola",
  $name2 = "Akano";
$name3 = "Olayiwola" + " " + "Akano";
document.getElementById("demo6").innerHTML = $name1 + " " + $name2;

var x, y;
x = 20;
x += 10;
y = x ** 5;
document.getElementById("demo7").innerHTML = y;

var firstname, firstName;
firstName = "Doe";
firstname = "Peterson";
document.getElementById("demo8").innerHTML = firstName;

var $price1 = 15;
var $price2 = 18;
var total = $price1 + $price2;
document.getElementById("demo5").innerHTML = "the total is: " + total;

var a = 5 + 5;
var person = "5" + 5;
var quote = "improvise" + 5;
document.getElementById("demo9").innerHTML =
  a + "</br>" + person + "</br>" + quote;

var carName, //undefined
  carName = "Mazda", //the variable is redclared
  product = "Mercedes",
  year = "18BC";
document.getElementById("demo10").innerHTML =
  carName + "</br>" + product + "</br>" + year;

var y = "13" + 2 + 8; // the no. 13 is in quotes so the rest are treated as strings
document.getElementById("demo11").innerHTML = y;

var tst1 = "improvise adapt ";
tst1 += "overcome";
document.getElementById("demo12").innerHTML = tst1;
