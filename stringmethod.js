var ind =
  "look improvise before you leap and improvise, adapt overcome improvise";
var pos1 = ind.lastIndexOf("improvise", 22);
document.getElementById("str4").innerHTML = pos1;

var lit =
  "the last days at forcardos high school, we enjoyed the last days at forcardos high school";
var pos2 = lit.indexOf("forcardos", 4);
document.getElementById("str5").innerHTML = pos2;

var txt = "look before you leap and improvise, adapt overcome";
var pms = tst.search("leap");
document.getElementById("str6").innerHTML = pms;

var str44 = "apple, watermelon, orange, pineapple, carrot";
var extr = str44.slice(7, 25);
document.getElementById("str7").innerHTML = extr;

var str = "apple, watermelon, orange, pineapple, carrot";
var res = str.slice(-38, -27);
document.getElementById("str8").innerHTML = res;

// If you omit the second parameter, the method will slice out the rest of the string:
var stri = "apple, watermelon, orange, pineapple, carrot";
var resi = str.slice(-17);
document.getElementById("str9").innerHTML = resi;

// substring() method
var str_1 = "apple, watermelon, orange, pineapple, carrot";
var res_1 = str_1.substring(19, 25);
document.getElementById("str10").innerHTML = res_1;

// If you omit the second parameter, substring() will slice out the rest of the string.

//substr() is similar to slice().

//The difference is that the second parameter specifies the length of the extracted part.
var str_11 = "apple, watermelon, orange, pineapple, carrot";
var res_11 = str_11.substr(7, 10);
document.getElementById("str11").innerHTML = res_11;

//If you omit the second parameter, substr() will slice out the rest of the string.
var str_11 = "apple, watermelon, orange, pineapple, carrot";
var res_11 = str_11.substr(19);
document.getElementById("str12").innerHTML = res_11;

// replacing string content
function myfunc() {
  var str = document.getElementById("str13").innerHTML;
  var txt = str.replace(/overcome/g, "think!!");
  document.getElementById("str13").innerHTML = txt;
}

//To replace case insensitive, use a regular expression with an /i flag (insensitive):
//Note that regular expressions are written without quotes.
function myFunc() {
  var str2 = document.getElementById("str14").innerHTML;
  var txt2 = str2.replace(/OVERCOME/i, "think!!");
  document.getElementById("str14").innerHTML = txt2;
}

function func() {
  var text = document.getElementById("str15").innerHTML;
  document.getElementById("str15").innerHTML = text.toUpperCase();
}

//The concat() method can be used instead of the plus operator. These two lines do the same:
var text1 = "Breaking";
var text2 = "bad";
var text3 = text1.concat(" ", text2);
document.getElementById("str16").innerHTML = text3;

/*
All string methods return a new string. They don't modify the original string.
Formally said: Strings are immutable: Strings cannot be changed, only replaced.
 */
// function Function() {
//   var ale = "       improvise adapt!!      ";
//   alert(ale.trim());
// }

// the chartcodeAt() method
var txxt11 = "improvise adapt overcome";
document.getElementById("str17").innerHTML = txxt11.charAt(8); // returns e

// the charcodeAt() method
var text = "improvise adapt overcome";
document.getElementById("str18").innerHTML = text.charCodeAt(8); // returns 101

// property access method
var text5 = "hello world";
var ans = text5[0];
document.getElementById("str19").innerHTML = ans; //returns H

// If no character is found, [ ] returns undefined, while charAt() returns an empty string.

// str[0] = "A" for example gives no error but doesnot work
var str = "hello world";
str[0] = "a";
document.getElementById("str20").innerHTML = str[0]; //returns H

function myArray() {
  var sttr = "a,b,c,d,e,f,g,h,i";
  var arr = sttr.split(",");
  document.getElementById("str21").innerHTML = arr[5]; // returns c
}

/*var str = "Hello";
var arr = str.split("");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
  text += arr[i] + "<br>"
}
document.getElementById("demo").innerHTML = text;*/
