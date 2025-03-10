var d = new Date();
document.getElementById("demo").innerHTML = d.getTime();

var d = new Date();
document.getElementById("demo1").innerHTML = d.getFullYear();

var dee = new Date("2010-09-16");
document.getElementById("demo2").innerHTML = dee.getMonth() + 1;

var di = new Date();
var months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
document.getElementById("demo3").innerHTML = months[di.getMonth()];

var d = new Date("05 / 25 / 2009");
document.getElementById("demo4").innerHTML = d.getDate();

var dt = new Date();
document.getElementById("demo5").innerHTML =
  dt.getHours() +
  "<br>" +
  dt.getMinutes() +
  "<br>" +
  dt.getSeconds() +
  "<br>" +
  dt.getMilliseconds();

var d = new Date();
document.getElementById("demo6").innerHTML = d.getDay();

var des = new Date();
var day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
document.getElementById("demo7").innerHTML = day[des.getDay()];

var d = new Date();
d.setFullYear(2021);
document.getElementById("demo8").innerHTML = d;

var ds = new Date();
ds.setFullYear(2021, 10, 15);
document.getElementById("demo9").innerHTML = ds;

var diii = new Date();
diii.setMonth(3);
document.getElementById("demo10").innerHTML = diii;

var d = new Date();
d.setDate(30);
document.getElementById("demo11").innerHTML = d;

var d = new Date();
d.setDate(d.getDate() + 70);
document.getElementById("demo12").innerHTML = d;

var d = new Date();
d.setHours(15);
document.getElementById("demo13").innerHTML = d;

var d = new Date();
d.setMinutes(38);
document.getElementById("demo14").innerHTML = d;

var d = new Date();
d.setSeconds(30);
document.getElementById("demo15").innerHTML = d;

/**
 * var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2100, 0, 14);

if (someday > today) {
  text = "Today is before January 14, 2100.";
} else {
  text = "Today is after January 14, 2100.";
}
document.getElementById("demo").innerHTML = text;
 */
