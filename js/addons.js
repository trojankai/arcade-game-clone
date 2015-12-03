var allGems = [];
var allHearts = [];
var Points = 0;
var Lives = 3;
var cnstXpos = [0,101,202,303,404];
var cnstYpos = [50,140,230];


//Heart object
var Heart = function(){
  this.x = cnstXpos[randomInt(0,4)];
  this.y = cnstYpos[randomInt(0,2)];
  this.sprite = 'images/Heart.png';

}

Heart.prototype.update = function(){
  this.x;
  this.y;
  this.checkCollision(player);
  //one heart in play at a time
  for (var j = 0; j < allHearts.length; j++){
    if (allHearts.length >= 2){
      allHearts.pop();
    }
  };

}

Heart.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Heart.prototype.checkCollision = function(player){
  //adds a life and 500 points
  if (player.x < this.x + 50 &&
      player.x + 65 > this.x &&
      player.y < this.y + 50 &&
      50 + player.y > this.y){
        allHearts.pop(this.heart);
        Points += 100;
        Lives += 1;

      };

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
  //one gem at a time
  for (var i = 0; i < allGems.length; i++){
    if (allGems.length >= 2){
      allGems.pop();
    }
  };

}

Gem.prototype.render = function(){
//creates an animated effect
  ctx.drawImage(Resources.get(this.sprites[randomInt(0,2)]), this.x, this.y);
}

Gem.prototype.collision = function(player){
  //adds 200 points
  if (player.x < this.x + 50 &&
      player.x + 65 > this.x &&
      player.y < this.y + 50 &&
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
setInterval(spawnHeart,15*1000);
setInterval(spawnGem, 4*1000);
