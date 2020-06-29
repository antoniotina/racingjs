window.onload = function() {
  var link = getBy("a")[2];
  var divs = getBy("div")[2];
  var footer = getBy("footer")[0];
  var user = accessCookie("acceptsCookies");
  if (user != "")
  {
    divs.style.textIndent = "-2000px";
    divs.style.color = "white";
    divs.style.fontSize = "0px";
    var delDiv = document.createElement("div");
    delDiv.innerHTML = '<input type="button" onclick="delCookie()" value="Supprimer le cookie">';
    footer.appendChild(delDiv);
  }

  document.body.addEventListener("click", function () { //TEST IF THE COOKIE EXISTS
    console.log(accessCookie("acceptsCookies"));
  });

  link.addEventListener("click", function() {
    checkCookie();
  });
  
  function createCookie(name, value, timeindays)
  {
    var date = new Date();
    date.setTime(date.getTime()+(timeindays*24*60*60*1000));
    document.cookie = name + "=" + value + "; expires=" + date.toGMTString();
  }
  function accessCookie(cookieName)
  {
    var name = cookieName + "=";
    var allCookieArray = document.cookie.split(';');
    for(var i=0; i<allCookieArray.length; i++)
    {
      var temp = allCookieArray[i].trim();
      if (temp.indexOf(name)==0)
      return temp.substring(name.length,temp.length);
     }
    return "";
  }
  function checkCookie()
  {
    var user = accessCookie("acceptsCookies");
    if (user != "")
    {
      divs.style.textIndent = "-2000px";
      divs.style.color = "white";
      divs.style.fontSize = "0px";
      var delDiv = document.createElement("div");
      delDiv.innerHTML = '<input type="button" onclick="delCookie()" value="Supprimer le cookie">';
      footer.appendChild(delDiv);
    }
    else
    {
      createCookie("acceptsCookies", "true", 1);
      checkCookie();
      return true
    }
  }
}

function delCookie() {
  var footer = getBy("footer")[0];
  document.cookie = "acceptsCookies"+'=; Max-Age=-99999999;';
  footer.removeChild(footer.childNodes[3]);
  var divs = getBy("div")[2];
  divs.style.textIndent = "0px";
  divs.style.color = "black";
  divs.style.fontSize = "16px";
}