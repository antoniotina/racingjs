
window.onload = function() {
  var targetTag = getBy("select")
  var targetButton = getBy("button")
  document.body.style.fontSize = "16px";
  targetButton[0].onclick = function() 
  {
    var i = document.body.style.fontSize.replace("px","") - 1;
    document.body.style.fontSize = i + "px";
  }
  targetButton[1].onclick = function() 
  {
    var i = document.body.style.fontSize.replace("px","");
    i++;
    document.body.style.fontSize = i + "px";
  }
  targetTag[0].onclick = function() 
  {
    document.body.style.backgroundColor = targetTag[0].value;
  };
}