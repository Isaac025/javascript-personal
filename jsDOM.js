document.getElementById("demo").innerHTML = "hello";

//document.createElement(element)	Create an HTML element
//document.removeChild(element)	Remove an HTML element
//document.appendChild(element)	Add an HTML element
//document.replaceChild(new, old)	Replace an HTML element
//document.write(text)	Write into the HTML output stream

// function myFunction() {
//   var x = document.querySelector(form);
//   var text = "";
//   for (let i = 0; i < x.length; i++) {
//     text += x.elements[i] + "<br>";
//   }
//   document.getElementById("demo1").innerHTML = text;
// }

// document.write(Date());
// let element = document.querySelector("h2");

// element.innerHTML = "GOODBYE!!!";

let demo2 = document.querySelector("#demo2");
demo2.style.color = "#1098ad";
demo2.style.backgroundColor = "orangered";
demo2.style.padding = "10px 20px";

// var id = setInterval(frame, 5);

// function myMove() {
//   var elem = document.getElementById("animate");
//   var pos = 0;
//   var id = setInterval(frame, 5);
//   function frame() {
//     if (pos == 350) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }

// HTML DOM allows JavaScript to react to HTML events:

//When a user clicks the mouse
//When a web page has loaded
//When an image has been loaded
//When the mouse moves over an element
//When an input field is changed
//When an HTML form is submitted
//When a user strokes a key

// const even = document.querySelector("#h1");
// even.onclick((this.innerHTML = OPPS));

function myFunc(id) {
  id.textContent = "Flew Away";
}

function displayDate() {
  document.getElementById("demo4").innerHTML = Date();
}

function checkCookies() {
  var text = "";
  if (navigator.cookieEnabled == true) {
    text = "Cookies Enabled";
  } else {
    text = "Cookies not Enabled";
  }
  document.getElementById("demo").innerHTML = text;
}

function myFuncss() {
  let x = document.getElementById("fname");
  x.value = x.value.toUpperCase();
}

function mOver(id) {
  id.innerHTML = "Goodbye!";
}

function mOut(id) {
  id.innerHTML = "mouse over me";
}

let btn = document.getElementById("btn");
// let para5 = document.querySelector("demo5");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  // para5.textContent = Date();
  // console.log("clicked");
  document.getElementById("demo5").innerHTML += "clicked" + "<br>";
  // alert("Welcome!!");
  // alert("Goodbye!!");
});

btn.addEventListener("mouseover", () => {
  document.getElementById("demo5").innerHTML += "mousedOver" + "<br>";
});

btn.addEventListener("mouseout", () => {
  document.getElementById("demo5").innerHTML += "mouseOut" + "<br>";
});

window.addEventListener("resize", () => {
  document.getElementById("demo6").innerHTML = Math.random();
});

//The addEventListener() method attaches an event handler to an element without overwriting existing event handlers.

//You can add many event handlers to one element.

//You can add many event handlers of the same type to one element, i.e two "click" events.

//You can add event listeners to any DOM object not only HTML elements. i.e the window object

//The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.
