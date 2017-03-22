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
     function grow() {
 +    if (div.height < 500 && div.width < 500) {
 +        div.height += 100;
 +        div.element.style.height = div.height + "px";
 +    
 +        div.width += 100;
 +        div.element.style.width = div.width + "px";
 +    } else {
 +        alert("The div is too large!");
 +    }
 +}
 
 