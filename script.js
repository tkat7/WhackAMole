var hitMole = 0;

function startGame(){
  hide('startButton');
  document.getElementsByTagName("body")[0].style.display="inline";
  unhide(randomMole());
  unhide(randomMole());

var  showInterval = setInterval(function () {
      for (i = 0; i < randomHowMany(); i++)
      {
        unhide(randomMole());
      }}, 2000);

var hideInterval = setInterval(function () {
        for (i = 0; i < randomHowMany(); i++)
        {
          hide(randomMole());
        }}, 1000);
    }

function hitMoles(mole) {
  hitMole++;
  if(hitMole === 10)
  {
    clearInterval(showInterval);
    clearInterval(hideInterval);
    alert("WINNNER!!!!!!");
  }
  hide(mole);
  document.getElementById("text").innerHTML = "Hit Count: " + hitMole;
}
  function hide(mole){
    document.getElementById(mole).style.display = "none";
  }

  function unhide(mole) {
    document.getElementById(mole).style.display = "inline";
  }

  function randomTime() {
    return  Math.floor(Math.random() * 4 ) + 1;
  }

  function randomMole() {

    switch (Math.floor(Math.random() * 10 ) + 1) {
      case 1:
      return "one";
      break;
      case 2:
      return "two";
      break;
      case 3:
      return "three";
      break;
      case 4:
      return "four";
      break;
      case 5:
      return "five";
      break;
      case 6:
      return "six";
      break;
      case 7:
      return "seven";
      break;
      case 8:
      return "eight";
      break;
      case 9:
      return "nine";
      break;
      case 10:
      return "ten";
      break;
    }
  }

  function randomHowMany () {
    return  Math.floor(Math.random() * 2 ) + 1;
  }
