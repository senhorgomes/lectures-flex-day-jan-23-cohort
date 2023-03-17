# DOM/Client Side Javascript & jQuery
### DOM(Document Object Model)
To run this, just copy the path of the html file onto your favourite browser.
Intro to the DOM
- DOM stands for DOCUMENT OBJECT MODEL. It is created by the browser once it finishes reading an html file.
REPL/devTools console
- What is REPL? It stands for Read-Eval-Print-Loop. Basically its an interactive language shell.
Window Object/ Navigator Object
- Each tab in a browser is a window with its own window object.
- Navigator is the browser. I.E Chrome, Firefox, Safari, etc. Contains information about the browser such as browser version, browser name, geographic location
What is the DOM and how does it work?
- The browser reads html files from top to bottom, while creating DOM nodes. The Document Object Model is a type of tree.
Event Object & Event Handling
- The Event object contains useful information about the specific event that occurred, where it occured, how it occured, etc.
- Each event is represented by an Event object which is passed as the argument to the callback function
```javascript
// console.log the mouse x and y coordinates whenever the body is clicked
const clickHandler = function (event) {
  console.log(event.clientX, event.clientY);
};
document
  .querySelector('body')
  .addEventListener('click', clickHandler);

// we can also remove event handlers using a similar API
document
  .querySelector('body')
  .removeEventListener('click', clickHandler);
```
### jQuery
What is the jQuery and how does it work?
- jQuery is a fast, small and feature-rich Javascript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an east to use API that works across a bunch of browsers.
Why do we need it?
- jQuery is a library that allows you to cut down on syntax.
```javascript
// html element
$('h1');
// class
$('.my-class');
// id
$('#my-id');
// nested element
$('.my-class span');
```
- Creating an element with jQuery
```javascript
const newDiv = $('<div>');
const newImg = $('<img>');

// note the greater than and less than
$('img') !== $('<img>');

// create a new image and give it a src attribute
const newImg = $('<img>').attr('src', '/path/to/image.png');

// append the new image to the body element
$('body').append(newImg);
```
Does it add any benefit to us?
- It introduces us to the idea of event handling, and DOM manipulation.
Event Handling with jQuery
- The event object has different keys than the regular Event object, but the values will remain the same. (i.e. mouse position)
```javascript
// using the .on method
$('button').on('click', clickHandler);

// there are several shorthand methods for common DOM events
$('button').click(clickHandler);
$('form').submit(submitHandler);
$('input').focus(focusHandler);
```

### Document Ready
We usually want to wait for the document to finish being loaded before our JavaScript runs
jQuery gives us a simple interface for wrapping our code
Once the document has finished loading, our callback is called
```javascript
$(document).ready(() => {
  // this callback runs once the document is "ready"
  console.log('ready');
});

// or
$(() => {
  // passing a callback to jQuery is a shorthand for $(document).ready()
  console.log('ready');
});
```
[DOM](https://www.w3schools.com/js/js_htmldom.asp#:~:text=When%20a%20web%20page%20is,Object%20Model%20of%20the%20page.) - More information on DOM, event handlers, queries and more.

[jQuery](https://jquery.com/) - More information about the library, and you can find the API documentation as well