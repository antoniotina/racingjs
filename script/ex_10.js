window.onload = function () {

  var divResult = getBy(".result");
  var divButtons = getBy("div");
  var calcArray = [];
  divResult[0].innerHTML = "";
  divButtons.sort();

  for (var i = 7; i < 20; i++) {
    divButtons[i].addEventListener("click", function(){ // IT PARSES THE NUMBERS AND WRITES NUMBERS ONLY
      var number = parseInt(this.innerHTML, 10);
      if(divResult[0].innerHTML.length < 13 && Number.isInteger(number, 10))
      {
        divResult[0].innerHTML = divResult[0].innerHTML + number;
      }
      else if(!Number.isInteger(number, 10))
      {
      }
      else
      {
        alert("You've reached the limit of numbers");
      }
    });
  }

  divButtons[23].addEventListener("click", function(){ // ITS THE backspace BUTTON
    divResult[0].innerHTML = divResult[0].innerHTML.slice(0, -1);
  });

  divButtons[22].addEventListener("click", function(){ // ITS THE CLEAR BUTTON
    divResult[0].innerHTML = "";
    calcArray = [];
  });

  divButtons[21].addEventListener("click", function(){ // ITS THE % BUTTON
    if(calcArray.length == 0)
    {
      calcArray.push(divResult[0].innerHTML);
      calcArray.push("%");
      divResult[0].innerHTML = '';
    }
  });

  divButtons[20].addEventListener("click", function(){ // ITS THE / BUTTON
    if(calcArray.length == 0)
    {
      calcArray.push(divResult[0].innerHTML);
      calcArray.push("/");
      divResult[0].innerHTML = '';
    }
  });

  divButtons[8].addEventListener("click", function(){ // ITS THE + BUTTON
    if(calcArray.length == 0)
    {
      calcArray.push(divResult[0].innerHTML);
      calcArray.push("+");
      divResult[0].innerHTML = '';
    }
  });

  divButtons[12].addEventListener("click", function(){ // ITS THE - BUTTON
    if(calcArray.length == 0)
    {
      calcArray.push(divResult[0].innerHTML);
      calcArray.push("-");
      divResult[0].innerHTML = '';
    }
  });

  divButtons[16].addEventListener("click", function(){ // ITS THE x BUTTON
    if(calcArray.length == 0)
    {
      calcArray.push(divResult[0].innerHTML);
      calcArray.push("x");
      divResult[0].innerHTML = '';
    }
  });

  divButtons[5].addEventListener("click", function(){ // ITS THE = BUTTON
    if(divResult[0].innerHTML == "" || calcArray.length != 2)
    {
    }
    else if(calcArray.length == 2)
    {
      calcArray.push(divResult[0].innerHTML);
      if(calcArray[1] == "%")
      {
        divResult[0].innerHTML = parseFloat(calcArray[0]) % parseFloat(calcArray[2]);
      }
      if(calcArray[1] == "-")
      {
        divResult[0].innerHTML = parseFloat(calcArray[0]) - parseFloat(calcArray[2]);
      }
      if(calcArray[1] == "+")
      {
        divResult[0].innerHTML = parseFloat(calcArray[0]) + parseFloat(calcArray[2]);
      }
      if(calcArray[1] == "/")
      {
        divResult[0].innerHTML = parseFloat(calcArray[0]) / parseFloat(calcArray[2]);
      }
      if(calcArray[1] == "x")
      {
        divResult[0].innerHTML = parseFloat(calcArray[0]) * parseFloat(calcArray[2]);
      }
      calcArray = [];
    }
  });

  divButtons[6].addEventListener("click", function(){ // ITS THE . BUTTON
    if(divResult[0].innerHTML.indexOf(".") == -1 && divResult[0].innerHTML != "")
    {
      divResult[0].innerHTML = divResult[0].innerHTML + ".";
    }
    else if(divResult[0].innerHTML == "")
    {
      divResult[0].innerHTML = divResult[0].innerHTML + "0.";
    }
  });
}