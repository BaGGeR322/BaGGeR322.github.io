function Pacman(x, y, direction) 
{
  Figure.apply(this, [x, y, direction]);
  this.diameter = random(5, 70);
  this.render = () => {
    fill(this.color.r, this.color.g, this.color.b);
    this.diameter = this.diameter + growth;
    switch (this.direction) 
    {
      case 1:
        this.moveUp()
        break;
      case 2:
        this.moveDown()
        break;
      case 3:
        this.moveLeft()
        break;
      case 4:
        this.moveRight()
        break;
      case 5:
        this.moveRandom();
        break;
    }
    arc(this.posX, this.posY, this.diameter, this.diameter, 0.5, PI + HALF_PI + QUARTER_PI, PIE);
  }
}