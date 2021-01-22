console.log('CONNECTED');

let outputEl = document.getElementById("output-target");

// Target all classes with the article-section tag
let articleEl = document.getElementsByClassName("article-section");

const handleSectionClick = (Event) => {console.log(Event);};

for (let i = 0; i < articleEl.length; i++) {
  articleEl[i].addEventListener("click", handleSectionClick);
}
/*
    Define functions that hold logic to be performed when mouse
    events are triggered by the browser.
*/

const handleHeaderMouseOver = (Event) => {
  outputEl.innerHTML = "You moved your mouse over me";
};

const handleHeaderMouseOut = (Event) => {
  outputEl.innerHTML = "Why u leave me?";
};
/*
    Get a reference to the DOM element with an id of
    "page-header", and attach an event handler for the
    mouseover, and mouseout, events.
 */
let header = document.getElementById("page-header");

header.addEventListener("mouseover", handleHeaderMouseOver);
header.addEventListener("mouseout", handleHeaderMouseOut);

/*
    We can also write an anonymous function (lamba expression)
    in the addEventListener declaration instead of using a
    function reference.
 */

let fieldEl = document.getElementById("keypress-input");
// Targets the text box with id keypress-input and registers keyboard inputs to display inputs in the OutputEl div
fieldEl.addEventListener("keyup", function (Event) {
  outputEl.innerHTML = Event.target.value;
 });

 /*
  Now we can start making a truly interactive experience
  combining HTML, JavaScript and CSS. When a user clicks
  on a button in the DOM, we can listen for that event in
  JavaScript, and then add, or remove, CSS classes.

  In this example, I simply use the `toggle()` method on
  the `classList` property of a DOM element to automatically
  add and remove a class.
 */

let guineaPig = document.getElementById("guinea-pig");
 
const toggleClass = (newClass1, newClass2) => {
  guineaPig.classList.toggle(newClass1);
  guineaPig.classList.toggle(newClass2);
  console.log("guineaPig.classList", guineaPig.classList);
};

document.getElementById("add-color").addEventListener("click", function() {
  toggleClass("blue", "red");
});

document.getElementById("make-large").addEventListener("click", function() {
  toggleClass("large");
});

document.getElementById("add-border").addEventListener("click", function() {
  toggleClass("bordered");
});

document.getElementById("add-rounding").addEventListener("click", function() {
  toggleClass("rounder");
});
