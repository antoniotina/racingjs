
window.onload = function() {
  var audio = new Audio('rauuuuuuuul.mp3');
  var buttonPlay = getBy("canvas");
  var buttons = getBy("button");
  button = buttonPlay[0].getContext('2d');
  button.fillStyle = 'white';
  button.beginPath();
  button.lineTo(6,6);
  button.lineTo(14, 10);
  button.lineTo(6, 14);
  button.closePath();
  button.fill();
  buttonPlay[0].onclick = function() {
    audio.play();
  }
  buttons[2].onclick = function() {
    audio.pause();
  }
  buttons[1].onclick = function() {
    audio.pause();
    audio.currentTime = 0;
  }
  buttons[0].onclick = function() {
    if(audio.muted == false)
    {
      audio.muted = true;
    }
    else
    {
      audio.muted = false;
    }
  }
}