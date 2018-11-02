window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame()
  };
  
  function startGame() {
    var game1 = new Game("canvas-game");
    game1.start();
  }


};