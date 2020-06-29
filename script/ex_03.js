
window.onload = function() {
  var targetDiv = getBy("div")
  targetDiv[2].onclick = function() 
  {
    var good = false;
    while(!good)
    {
      var person = "";
      while(person == "")
      {
        var person = prompt("Quel est votre nom ?");
      }
      if(person != null)
      {
        var confirmation = confirm("Etes vous sûr que ".concat(person.concat(" est votre nom ?")));
        if(confirmation == true)
        {
          alert("Bonjour ".concat(person.concat(" ! ")));
          good = true;
        }
      }
      else
      {
        good = true;
      }
    }
  };
}