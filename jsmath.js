document.getElementById("mat").innerHTML = Math.PI;

document.getElementById("mat1").innerHTML = Math.round(19.792);

var x = 10,
  y = 3;
document.getElementById("mat2").innerHTML = Math.pow(x, y);

document.getElementById("mat3").innerHTML = Math.sqrt(324); // returns 18

document.getElementById("mat4").innerHTML = Math.abs(-5.72); // returns 5.72

document.getElementById("mat5").innerHTML = Math.ceil(17.01); // returns 18

document.getElementById("mat6").innerHTML = Math.floor(4.8); // returns 4

document.getElementById("mat7").innerHTML =
  "the sin of angle 90 degrees is " + Math.sin((90 * Math.PI) / 180);

document.getElementById("mat8").innerHTML =
  "the cosine of angle 250 degrees is " + Math.cos((250 * Math.PI) / 180);

document.getElementById("mat9").innerHTML =
  Math.max(0, 150, 30, 20, -8, -200) +
  "<br>" +
  Math.min(0, 150, 30, 20, -8, -200);

document.getElementById("mat10").innerHTML = Math.random();

document.getElementById("mat11").innerHTML =
  "<p><b>Math.E</b> " +
  Math.E +
  "</p>" +
  "<p><b>Math.PI</b> " +
  Math.PI +
  "</p>" +
  "<p><b>Math.SQRT2</b> " +
  Math.SQRT2 +
  "</p>" +
  "<p><b>Math.SQRT1_2</b> " +
  Math.SQRT1_2 +
  "</p>" +
  "<p><b>Math.LN2</b> " +
  Math.LN2 +
  "</p>" +
  "<p><b>Math.LN10</b> " +
  Math.LN10 +
  "</p>" +
  "<p><b>Math.LOG2E</b> " +
  Math.LOG2E +
  "</p>" +
  "<p><b>Math.LOG10E</b> " +
  Math.LOG10E +
  "</p>";

document.getElementById("mat12").innerHTML = Math.floor(Math.random() * 10); // returns a random integer from 0 to 9

document.getElementById("mat13").innerHTML = Math.floor(Math.random() * 11); // returns a random integer from 0 to 10

document.getElementById("mat14").innerHTML = Math.floor(Math.random() * 100); // returns a random integer from 0 to 99

document.getElementById("mat15").innerHTML = Math.floor(Math.random() * 101); // returns a random integer from 0 to 100

document.getElementById("mat16").innerHTML = Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10

document.getElementById("mat17").innerHTML =
  Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function getRndInteger1(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
