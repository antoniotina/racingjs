


window.onload = function() {

  var test = "div";
  var button = getBy(test)
  count = 0;
  button[2].onclick = function() 
  {
    count += 1;
    button[2].innerHTML = count;
  };
}