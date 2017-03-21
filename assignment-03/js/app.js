var div = {
 +    element: document.getElementsByTagName('div')[0],
 +    height: 300,
 +    width: 300
 +}

var divStyle = window.getComputedStyle(div.element);

var buttonEnlarge = document.getElementById('enlarge-div');
  var buttonShrink = document.getElementById('shrink-div');
  
 +buttonEnlarge.addEventListener('click', grow);
 +buttonShrink.addEventListener('click', shrink);
 +
/*jslint browser, es6, single, for, devel, this */
/*global window */
