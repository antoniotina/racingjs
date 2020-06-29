
window.onload = function() {
  const canvas = getBy("canvas").reverse();
  const x = (canvas.length-1)/3;
  let orange = Math.floor(x);
  let purple = Math.floor(x);
  let olive = Math.floor(x);
  const mo = (canvas.length-1) % 3;
  if(mo == 1)
  {
    orange++;
  }
  else if(mo == 2)
  {
    orange++;
    olive++;
  }
  for(i = 0; i < orange; i++)
  {
    canvas[i].style.setProperty("background", "orange", "important");
  }
  for(i = orange; i < (purple + orange); i++)
  {
    canvas[i].style.setProperty("background", "purple", "important");
  }
  canvas[purple + orange].style.setProperty("background", "black", "important");
  for(i = (orange + purple + 1); i < (purple + orange + olive + 1); i++)
  {
    canvas[i].style.setProperty("background", "olive", "important");
  }
}