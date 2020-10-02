l = 800
w = 800

function setup() {
  createCanvas(l, w);
  moisty = new towel();
}

function draw() {
  background(255);
  if (moisty.dead == false) {
    moisty.show()
    moisty.move()
  }
  
  if (moisty.x + moisty.w < 0 || moisty.x - moisty.w > w || 
      moisty.y + moisty.l < 0 || moisty.y - moisty.l > l) {
    
      text("heck yeah brother", l / 2, w / 2)
      moisty.dead = true
    }
  
}

function towel() {
  this.x = 400
  this.y = 400
  this.vx = random(-2, 2)
  this.vy = random(-2, 2)
  this.w = 30
  this.l = 30
  this.dead = false
  
  
  
  this.show = function() {
    stroke(0, 125, 255)
    fill(0, 125, 255)
    strokeWeight(1)
    ellipse(this.x, this.y, this.w, this.l)
  }
  
  this.move = function() {
  this.x += this.vx
  this.y += this.vy
  
  this.vx = this.vx + random(-1, 1)
  this.vy = this.vy + random(-1, 1)
    
  if (this.vx >= 6 || this.vx <= -6) {
    this.vx = 0
  }
    
  if (this.vy >= 6 || this.vy <= -6) {
    this.vy = 0
  }
  
  }
}  