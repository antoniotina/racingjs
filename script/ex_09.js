
window.onload = function () {
  let divs = getBy("div");
  var canvas = getBy("canvas");
  divOffset = offset(divs[3]);

  window.onresize = function () {
    divOffset = offset(divs[3]);
  }

  divs[2].innerHTML = "";
  divs[3].style.padding = "0px";
  canvas[0].style.marginTop = divs[2].offsetHeight / 2 - 11 + "px";
  canvas[0].style.marginLeft = divs[2].offsetWidth / 2 - 11 + "px";
  canvas[0].style.marginRight = "0px";
  divs[3].style.textAlign = "inherit";
  divs[3].style.maxHeight = "60px"; 
  canvas[0].setAttribute('draggable', "true");

  document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData('text/plain', '');
  });
  
  document.addEventListener("drag", function(event) {
    divs[2].innerHTML = "Weeeeeeeeee !!!";
    canvas[0].style.visibility = "hidden";
    canvas[0].style.marginTop = "0px";
    canvas[0].style.marginLeft = "0px";
  });
  
  document.addEventListener("dragover", function(event) { // There is a need with e.preventDefault for dragOver event before drop event otherwise it does the dragover default before it gets to the drop
    event.preventDefault();
  });
  
  document.addEventListener("drop", function(event) {
    event.preventDefault();
    canvas[0].style.visibility = "visible";
    var x = event.clientX;
    var y = event.clientY;
    console.log(x, y);
    if(y - divOffset.top - 11 < 0)
    {
      canvas[0].style.marginTop = "0px";
    }
    else if(y - divOffset.top - 11 > 40)
    {
      canvas[0].style.marginTop = "40px";
    }
    else
    {
      canvas[0].style.marginTop = y - divOffset.top - 11 + "px";
    }
    if(x - divOffset.left - 11 < 0)
    {
      canvas[0].style.marginLeft = "0px";divs
    }
    else if(x - divOffset.left - 11 > 678)
    {
      canvas[0].style.marginLeft = "678px";
    }
    else
    {
      canvas[0].style.marginLeft = x - divOffset.left - 11 + "px";
    }
    divs[2].innerHTML = "X coords: " + x + ", Y coords: " + y + " relative to the document<br>" + "X coords: " + canvas[0].style.marginLeft + ", Y coords: " + canvas[0].style.marginTop + " relative to the div it is inside of";
  });
}

function offset(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset,
  scrollTop = window.pageYOffset;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}