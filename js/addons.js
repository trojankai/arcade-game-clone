var allGems = [];
var allHearts = [];
var Points = 0;
var Lives = 3;
var cnstXpos = [];
var cnstYpos = [];
// to do-- make a place for points to go and do
// an instruction page for what everything means
// add the star as the only place to restart a level--get 1000 pts for
//gems placed in array
// allGems.push
// Heart objects placed in a array
// allHearts.push add points on the board
// when there is a collision pop from array
// set timeout or interval to pop the gem and hearts for both arrays.


var Heart = function(){
  this.x = cnstXpos[randomInt(0,4)];
  this.y = cnstYpos[randomInt(0,4)];
  this.sprite = 'images/Heart.png';

}

Heart.prototype.update = function(){

}

Heart.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Heart.prototype.reset = function(){
//   this.x = undefined;
//   this.y = undefined;
// }
Heart.prototype.collision = function(){
  //adds a life and 500 points
  if (player.x < this.x + 50 &&
      player.x + 65 > this.x &&
      player.y < this.y + 50 &&
      50 + player.y > this.y){
        heart.reset();
        return Points += 200;
      }
}



var Gem = function(){
  this.x = 0;
  this.y = 0;
  this.sprites = ['images/Gem Green.png',
'images/Gem Orange.png', 'images/Gem Blue.png']
//TO DO-- make a separate parameter for each image of gems
}

Gem.prototype.update = function(){
  this.x += 101;
  this.y += 83;

}

Gem.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprites[randomInt(0,2), this.x, this.y]));
}

// Gem.prototype.collision = function(){}
  //adds 200 points

// var drawScore = function() {
//   ctx.fillText("Points: " + Points, 50, 200);
//   }
// drawScore();
var spawnGem = function(){
  var gem = new Gem();
  allGems.push(gem);
  console.log('new gem ');
}
var heart = new Heart();
allHearts.push(heart);
setTimeout(spawnGem, 1000);
