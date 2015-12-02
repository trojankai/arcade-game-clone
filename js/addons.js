var allGems = [];
var allHearts = [];
var Points = 0;
var Lives = 3;
var cnstXpos = [0,125,225,325];
var cnstYpos = [180,280,380];


//Heart object
var Heart = function(){
  this.x = cnstXpos[randomInt(0,3)];
  this.y = cnstYpos[randomInt(0,2)];
  this.sprite = 'images/Heart.png';

}

Heart.prototype.update = function(){
  this.x;
  this.y;
  this.checkCollision(player);

}

Heart.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Heart.prototype.checkCollision = function(player){
  //adds a life and 500 points
  if (player.x < this.x + 41 &&
      player.x + 41 > this.x &&
      player.y < this.y + 50 &&
      50 + player.y > this.y){
        allHearts.pop(this.heart);
        Points += 500;
        Lives += 1;
      }

}



var Gem = function(){
  this.x = cnstXpos[randomInt(0,3)];
  this.y = cnstYpos[randomInt(0,2)];
  this.sprites = ['images/Gem Green.png',
'images/Gem Orange.png', 'images/Gem Blue.png']
//TO DO-- make a separate parameter for each image of gems
}

Gem.prototype.update = function(){
  this.x;
  this.y;
  this.collision(player);
}

Gem.prototype.render = function(){
//creates an animated effect
  ctx.drawImage(Resources.get(this.sprites[randomInt(0,2)]), this.x, this.y);
}

Gem.prototype.collision = function(player){
  //adds 200 points
  if (player.x < this.x + 65 &&
      player.x + 50 > this.x &&
      player.y < this.y + 65 &&
      50 + player.y > this.y){
        allGems.pop(this.gem);
        Points += 200;
      }
}




//spawn gems into an array
var spawnGem = function(){
  var gem = new Gem();
  allGems.push(gem);
  console.log('new gem ');
}
//spawn hearts into an array
var spawnHeart = function(){
  var heart = new Heart();
  allHearts.push(heart);
  console.log('new heart ');
}

// //spawn gems and heart at set intervals
setInterval(spawnHeart,1*1000);
setInterval(spawnGem, 7*1000);

var clearGem = function(){
  allGems.pop(3);

}
setInterval(clearGem,5*1000);
