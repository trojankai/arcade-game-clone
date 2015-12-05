//function used for random integer generation for speeds
var randomInt = function(min, max) {
    return Math.floor((Math.random() * max) + min)};

// Enemies our player must avoid
var Enemy = function(y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';

    //since x will be changed in update, x starts at 0
    this.x = 0;

    //y position determined at instantiation
    this.y = y;

    //generate random speed for update
    this.speed = randomInt(25,50);

  };

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // window.requestAnimationFrame(Enemy);
    for (var i = 0; i <= allEnemies.length; i++) {
      this.x += this.speed * dt;
        if (this.x >= 600) {
            this.x = -50;
            return this.x;
          }
    }
    this.checkCollision(player);

};

Enemy.prototype.checkCollision = function(player) {
    if (player.x < this.x + 50 &&
        player.x + 65 > this.x &&
        player.y < this.y + 50 &&
        50 + player.y > this.y) {
        //resets player when collision occurs
        player.reset();

        Points -= 200;
        Lives -= 1;

    //window reloads to restart game
    if (Lives == 0) {
      location.reload();
    }
    }
    //when player reaches the water, resets to initial position
    if (player.y < 0){
      player.reset();
      Points += 500;
      console.log(player.x);
    }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite),this.x, this.y);
    };


var Player = function() {

  this.sprite = 'images/char-boy.png';
  this.x = 0;
  this.y = 400;
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
Player.prototype.reset = function(){
  //resets player position
    this.x = 0;
    this.y = 400;
}


Player.prototype.update = function() {
  //keeps player in the game area
    if (this.x > 404 ){
      this.x = 404;
    }
    if (this.x > 0){
        this.x == 0;
      }
    return this.x;



    }

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite),this.x, this.y);
  //draw score and lives on the screen
  ctx.font = "30px Arial"
  ctx.fillText('Points: '+Points, 0, 101);
  ctx.fillText('Lives: '+Lives, 0, 410);
};
//keyboard handler

Player.prototype.handleInput = function(e) {
    if (e === 'left' && this.x > 0 ) {
        this.x -= 101;
    }
    if (e === 'right' && this.x < 500 ) {
        this.x += 101;
    }
    if (e === 'up' && this.y > 0 ) {
        this.y -= 83;
    }
    if (e === 'down' && this.y < 400 ) {
        this.y += 83;
}};

//spawn enemy after 5 seconds
var timedSpawn = function(){
  enemy4 = new Enemy(140);
  allEnemies.push(enemy4);
  console.log('i have spawned 2nd row');
}
//spawns another enemy after 10 seconds
setTimeout(timedSpawn, 10*1000);
setInterval(timedSpawn,80*1000);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var player = new Player();
var allEnemies =[];

//instantiate enemies
var enemy = new Enemy(50);
var enemy2 = new Enemy(140);
var enemy3 = new Enemy(230);

allEnemies.push(enemy, enemy2, enemy3);

//spawns new enemy after every 60 seconds
var timedSpawn2 = function(){
  var enemy = new Enemy(50);
  allEnemies.push(enemy);
  console.log('i have spawned first row');
}

setInterval(timedSpawn2, 60*1000);

var timedSpawn3 = function(){
  var enemy = new Enemy(230);
  allEnemies.push(enemy);
  console.log('i have spawned 3rd row');
}

setInterval(timedSpawn3, 60*1000);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});
