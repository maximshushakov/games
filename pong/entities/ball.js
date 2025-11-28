import Vector from '../utils/vector.js';

export class Ball {
  position = new Vector();
  velocity = new Vector();
  r = 100;

  constructor(position, velocity, r = 0) {
    this.r = r;
    if (position) this.position.addTo(position);
    if (velocity) this.velocity.addTo(velocity);
  }

  render = (ctx) => {
    ctx.beginPath();
    ctx.arc(this.position.x, this.position.y, this.r, 0, Math.PI*2);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
  }

  getRect = () => {
    return {
      x: this.position.x - this.r,
      y: this.position.y - this.r,
      width: this.r * 2,
      height: this.r * 2,
    }
  }
}
