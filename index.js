let gameloop = new GameLoop();

gameloop.init = function() {
    console.log('Todo, init game objects.');
}

gameloop.update = function() {
    console.log('Todo, update game objects');
}

gameloop.render = function() {
    console.log('Todo, render game objects');
}

window.onload = function() {
    gameloop.start();
}
