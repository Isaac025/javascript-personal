// Use the if statement to specify a block of JavaScript code to be executed if a condition is true.
if (new Date().getHours() < 18) {
  console.log("Good day!!");
}

if (new Date().getHours() < 13) {
  document.getElementById("demo1").innerHTML = "Good morning!!";
}

var hours = new Date().getHours();
var greeting;
if (hours > 14) {
  greeting = "Good morning";
} else if (hours > 12) {
  greeting = "Good day";
} else {
  greeting = "Good Night";
}

console.log(greeting);
