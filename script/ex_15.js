window.onload = function() {
  var divs = getBy("div")[2];
  var counter = 0;
  var arrColors = ["blue", "red", "olive", "gray", "yellow", "green"];
  var pangolin = new CustomEvent("pangolin");
  divs.addEventListener("pangolin", function() {
    setInterval(function(){ 
      divs.style.backgroundColor = arrColors[counter];
      if(counter == 5)
      {
        counter = 0;
      }
      else
      {
        counter++;
      }}, 16);
  });
  divs.addEventListener("mouseover", function (){
    divs.dispatchEvent(pangolin);
  })
}