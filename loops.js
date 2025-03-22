var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
// text = cars[0] + "<br>";
// text += cars[1] + "<br>";
// text += cars[2] + "<br>";
// text += cars[3] + "<br>";
// text += cars[4] + "<br>";
// text += cars[5];

var text = "";

for (var i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

var text = "";
for (var y = 0; y < 6; y++) {
  text += "the number is " + y + "<br>";
}

document.getElementById("demo1").innerHTML = text;

var text = "";
var y = 4;
for (; y < cars.length; y++) {
  text += cars[y] + "<br>";
}

document.getElementById("demo2").innerHTML = text;
var text = "";
for (let index = 0; index < cars.length; ) {
  text += cars[index] + index + "<br>";
  index++;
}
document.getElementById("demo3").innerHTML = text;

var person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

var text = "";
for (let x in person) {
  text += person[x] + " ";
}
document.getElementById("demo4").innerHTML = text;
var cars = ["BMW", "Volvo", "Mini"];
var x;
for (x of cars) {
  document.getElementById("demo5").innerHTML += x + "<br>";
}

let test = "fruits";
for (let y of test) {
  document.getElementById("demo6").innerHTML += y + "<br>";
}

var i = 0;
while (i < 10) {
  document.getElementById("demo7").innerHTML += "The number is " + i + "<br>";
  i++;
}

var n = 0;
var textt = "";
do {
  textt += "The number is " + n + "<br>";
  n++;
} while (n < 10);
document.getElementById("demo8").innerHTML = textt;

var i = 0;
while (i < 10) {
  if (i === 3) {
    break;
  }
  document.getElementById("demo9").innerHTML += "The number is " + i + "<br>";
  i++;
}

//break
for (let i = 0; i < 20; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  document.getElementById("demo10").innerHTML += "The number is " + i + "<br>";
}
