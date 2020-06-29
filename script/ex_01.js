


window.onload = function() {
  var test = "div";
  var button = getBy(test)
  console.log(button[2])
  document.body.innerHTML = document.body.innerHTML.replace('Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'Hello World');
}