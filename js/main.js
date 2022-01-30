// this is called a self invoking anonymous function
// it's called module pattern
// this is JS comment
/* this is a block comment
this can run over a couple of times */

(() => {
    // go into the document and make a ref to an element that you want to work with it
    let theHeading = document.querySelector(".main-heading"),
        theIcons = document.querySelectorAll(".icon");
  
    // create a function that runs when theHeader element is clicked
    function logElement() {
      console.log("Hey! You clicked", this.id, "!");
    }
  
    // add event handling here
    // the "do something" is the function we run when the element is clicked
    theHeading.addEventListener("click", logElement);
  
    // loop through all of the icons and add event handeling to them
    // process each icon one at a time and add behaviour
    theIcons.forEach(icon => icon.addEventListener("click", logElement));
  
  })();  