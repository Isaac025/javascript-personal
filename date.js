var d = new Date();
document.getElementById("demo").innerHTML = d;

var de = new Date(2018, 10, 11, 18, 30, 22);
document.getElementById("demo1").innerHTML = de;

var d = new Date(2008, 9, 15, 18);
document.getElementById("demo2").innerHTML = d;

var dat = new Date(2018, 10, 11);
document.getElementById("demo3").innerHTML = dat;

var d = new Date(2008, 9);
document.getElementById("demo4").innerHTML = d;

var dee = new Date(3000);
document.getElementById("demo5").innerHTML = dee;

var d = new Date(99, 10, 11);
document.getElementById("demo6").innerHTML = d;

var di = new Date("October 15, 2008 14:24:16");
document.getElementById("demo7").innerHTML = di;

var d = new Date(-100000000000);
document.getElementById("demo8").innerHTML = d;

var deee = new Date(86400000);
document.getElementById("demo9").innerHTML = deee;

var da = new Date();
document.getElementById("demo10").innerHTML = da.toUTCString();

var d = new Date();
document.getElementById("demo11").innerHTML = d.toDateString();

var det = new Date("2014-05");
document.getElementById("demo12").innerHTML = det;

/*var dett = new Date(2014, 4, 30);
document.getElementById("demo13").innerHTML = dett;*/

var d = new Date("2011");
document.getElementById("demo13").innerHTML = d;

var dit = new Date("2016-11-11T10:11:11Z");
document.getElementById("demo14").innerHTML = dit;

var d = new Date("2016-11-11T10:11:11-5:00");
document.getElementById("demo15").innerHTML = d; // not working

var ditt = new Date("07 / 14 / 2009");
document.getElementById("demo16").innerHTML = ditt;

var ditt = new Date("2009/07/14");
document.getElementById("demo17").innerHTML = ditt; // worked

var d = new Date("30 April 2013");
document.getElementById("demo18").innerHTML = d;
//month and day can be written in any order
//also month can be written in full or short
//commas are ignored and names are case insensitive

var dii = new Date("JANUARY, 18, 2013");
document.getElementById("demo19").innerHTML = dii;

var msec = Date.parse("2020-04-13");
document.getElementById("demo20").innerHTML = msec;

var msecc = Date.parse("08/15/2015");
d = new Date(msecc);
document.getElementById("demo21").innerHTML = d;
