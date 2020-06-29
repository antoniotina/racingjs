
window.onload = function() {
  var button = getBy("div");
  button[2].innerHTML = "";
  console.log(button[2]);
  function checkKey(e) {
    if (button[2].innerHTML.length < 42) 
    {
      button[2].innerHTML = button[2].innerHTML + e['key'];
    }
    else
    {
      button[2].innerHTML = button[2].innerHTML.slice(1) + e['key'];
    };
  }
  document.onkeypress = checkKey;
}