const downNewtons = 10 * 9.8;
const squareHeight = 50;
const baseTop = 349;
const bottomSea = 1149.6;
let counter = 0;

window.onload = () => {
  let weight = 1;
  let waterDiv = getBy("div")[3];
  const square = getBy("div")[2];
  waterDiv.innerHTML = weight + "kg";
  square.style.top = sinkCalc(weight) + "px";
  square.addEventListener("click", () => {
    weight++;
    waterDiv.innerHTML = weight + "kg";
    if(square.style.top.substring(0, square.style.top.length - 2) >= bottomSea)
    {
      return;
    }
    if(sinkCalc(weight) < bottomSea)
    {
      let pos = square.style.top.substring(0, square.style.top.length - 2);
      let id = setInterval(frame, 30);
      function frame() {
        if (pos > sinkCalc(weight)) {
          clearInterval(id);
        } else {
          pos++; 
          square.style.top = pos + "px";
        }
      }
    }
    else if(counter < 1)
    {
      counter++;
      var pos = baseTop + squareHeight;
      var id = setInterval(frame, 5);
      function frame() {
        if (pos > bottomSea) {
          clearInterval(id);
        } else {
          pos++; 
          square.style.top = pos + "px"; 
        }
      }
    }
  });
}

function sinkCalc(weight) {
  const upNewtons = weight * 9.8;
  if (upNewtons <= downNewtons) {
    return (upNewtons / downNewtons) * squareHeight + baseTop;
  } else {
    return bottomSea;
  }
}

// Fg = 0.01kg x 9.8 ms-2 = 0.098 kg m s-2 = 0.098 N
// Fb = 5 cm3 water = 5 g water = 0.005 kg x 9.8 ms-2 = 0.049 kg m s-2 = 0.049 N