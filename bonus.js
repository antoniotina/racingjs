
var idflag = 0;

function getBy(stuff, parent = document.body, array = []){

  var child, children = parent.children;
  
  if(children !=='undefined'){
    var l = children.length;
    while(l--){
      child = children[l];
      if(stuff.charAt(0) == "#")
      {
        child.id = "#" + child.id;
        if(child.id == stuff)
        {
          array.push(child);
          idflag++;
        }
        child.id = child.id.substr(1);
      }
      else if(stuff.charAt(0) == ".")
      {
        child.className = "." + child.className;
        if(child.className == stuff) array.push(child);
        child.className = child.className.substr(1);
      }
      else
      {
        if(child.tagName == stuff.toUpperCase()) array.push(child);
      }
      getBy(stuff, child, array);
      if(idflag == 1)
      {
        return array[0];
      }
    }
  }
  return array;
}