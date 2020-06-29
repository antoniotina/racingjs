
var img1 = document.createElement("img");
img1.src = "https://images.unsplash.com/photo-1555546415-c5c9b54f70f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=799&q=80";
img1.crossOrigin = "anonymous";
var pangolin = img1;

window.addEventListener("load", function () {
  let imgCanvas = document.createElement("canvas"), imgContext = imgCanvas.getContext("2d");
  let divs = getBy("div")[2];
  imgCanvas.width = pangolin.width;
  imgCanvas.height = pangolin.height;
  imgContext.drawImage(pangolin, 0, 0, pangolin.width, pangolin.height);
  var imgAsDataURL = imgCanvas.toDataURL("image/png");

  try {
    localStorage.setItem("pangolin", imgAsDataURL);
    if(localStorage["pangolin"] != "undefined")
    {
      var x = document.createElement("IMG");
      x.setAttribute("src", localStorage["pangolin"]);
      divs.appendChild(x);
    }
  }
  catch (e) {
    console.log("Le lien n'est pas bon");
  }
}, false);