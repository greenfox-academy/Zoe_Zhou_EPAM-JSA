'use strict';

var buttonElements = [
  'Button 0',
  'Button 1',
  'Button 2'
].map(function(buttonText) {
  var buttonElement;
  buttonElement = document.createElement('button');
  buttonElement.appendChild(document.createTextNode(buttonText));
  return buttonElement;
});


// solution one
function appendButtons() {
  for (var i = 0; i < buttonElements.length; i++) {
    buttonElements[i].addEventListener('click', (function(i) {
      return function() { console.log('button index: ', i); };
    })(i));
    document.body.appendChild(buttonElements[i]);
  }
}

// solution two
function appendButtons2() {
  for (var i = 0; i < buttonElements.length; i++) {
    (function(i) {
      buttonElements[i].addEventListener('click', function() {
        console.log('button index: ', i);
      })
    })(i);
    document.body.appendChild(buttonElements[i]);
  }
}

//solution three
function appendButtons3() {
  for (let i = 0; i < buttonElements.length; i++) {
    buttonElements[i].addEventListener('click', function() {
      console.log('button index: ', i);
    });
    document.body.appendChild(buttonElements[i]);
  }
}

window.addEventListener('load', appendButtons4);

//We want to display the buttons original index within the definition array
//Unfortunately a developer made a serious bug, if we click on any button we get 3 as index.
//Please fix the bug. (without changeing the button attributes)