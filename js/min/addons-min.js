var allGems=[],allHearts=[],Points=0,Lives=3,cnstXpos=[0,125,225,325],cnstYpos=[180,280,380],Heart=function(){this.x=cnstXpos[randomInt(0,3)],this.y=cnstYpos[randomInt(0,2)],this.sprite="images/Heart.png"};Heart.prototype.update=function(){this.x,this.y,this.checkCollision(player)},Heart.prototype.render=function(){ctx.drawImage(Resources.get(this.sprite),this.x,this.y)},Heart.prototype.checkCollision=function(t){t.x<this.x+41&&t.x+41>this.x&&t.y<this.y+50&&50+t.y>this.y&&(allHearts.pop(this.heart),Points+=500,Lives+=1)};var Gem=function(){this.x=cnstXpos[randomInt(0,3)],this.y=cnstYpos[randomInt(0,2)],this.sprites=["images/Gem Green.png","images/Gem Orange.png","images/Gem Blue.png"]};Gem.prototype.update=function(){this.x,this.y,this.collision(player)},Gem.prototype.render=function(){ctx.drawImage(Resources.get(this.sprites[randomInt(0,2)]),this.x,this.y)},Gem.prototype.collision=function(t){t.x<this.x+65&&t.x+50>this.x&&t.y<this.y+65&&50+t.y>this.y&&(allGems.pop(this.gem),Points+=200)};var spawnGem=function(){var t=new Gem;allGems.push(t),console.log("new gem ")},spawnHeart=function(){var t=new Heart;allHearts.push(t),console.log("new heart ")};setInterval(spawnHeart,1e3),setInterval(spawnGem,7e3);var clearGem=function(){allGems.pop(3)};setInterval(clearGem,5e3);