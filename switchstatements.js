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

switch (new Date().getDay()) {
  default:
    console.log("Error (not a day)");
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
}

let color = "indigo";
switch (color) {
  case "Red":
  case "RED":
    console.log("Color is red");
    break;
  case "Blue":
  case "BLUE":
    console.log("Color is blue");
    break;
  case "Green":
  case "GREEN":
    console.log("Color is green");
    break;
  default:
    console.log("Color is not red, blue or green");
}

//Note: If you omit the break statement, the next case will be executed even if the evaluation does not match the case.
//The default case does not have to be the last case in a switch block:
//If default is not the last case in the switch block, remember to end the default case with a break.
//If multiple cases matches a case value, the first case is selected.
