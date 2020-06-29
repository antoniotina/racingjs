
let x = document.createElement("IMG");
x.setAttribute("src", localStorage["pangolin"]);
x.setAttribute("id","pangolin");

window.onload = function () {
  let b = clearInterval();
  let c = clearInterval();
  let divs = getBy("div")[2];
  try {
    if(typeof localStorage["pangolin"] !== "undefined")
    {
      divs.appendChild(x);
    }
  }
  catch (e) {
    alert("Go back to exercisee 12 and give localStorage an image");
  }
  let image = getBy("#pangolin");
  let imgWidth = image.clientWidth / 100;
  let imgHeight = image.clientHeight / 100;
  let origWidth = image.clientWidth;
  let origHeight = image.clientHeight;

  if(typeof imgWidth === "undefined" || typeof image.style === "undefined")
  {
    return;
  }

  divs.addEventListener("mouseover", function () {
    b = setInterval(bigger, 100, image, imgWidth, imgHeight);
    clearInterval(c);
  });

  divs.addEventListener("mouseout", function () {
    clearInterval(b);
    c = setInterval(smaller, 100, image, imgWidth, imgHeight, origWidth, origHeight);
  });
  
  if(typeof image.clientWidth !== "undefined")
  {
    image.addEventListener("click", function () {
      divs.removeChild(image);
      localStorage.removeItem("pangolin");
    });
  }

  function bigger(image, imgWidth, imgHeight) {
    if(image.clientHeight < 2 || image.clientWidth < 2)
    {
      image.style.width = "0px";
      image.style.height = "0px";
      clearInterval(b);
    }
    image.style.width = image.clientWidth - imgWidth + "px";
    image.style.height = image.clientHeight - imgHeight + "px";
    return;
  }

  function smaller(image, imgWidth, imgHeight, origWidth, origHeight) {
    if(image.clientWidth >= origWidth)
    {
      image.style.width = origWidth + "px";
    }
    else
    {
      image.style.width = image.clientWidth + imgWidth + "px";
    }
    if(image.clientHeight >= origHeight)
    {
      image.style.width = origWidth + "px";
    }
    else
    {
      image.style.height = image.clientHeight + imgHeight + "px";
    }
    return;
  }
}