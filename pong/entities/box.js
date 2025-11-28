import Vector from '../utils/vector.js';

export class Box {
  position = new Vector();
  velocity = new Vector();
  width = 10;
  height = 10;

  constructor({position, velocity, width = 0, height = 0 }) {
    this.width = width;
    this.height = height;
    if (position) this.position.addTo(position);
    if (velocity) this.velocity.addTo(velocity);
  }

  render = (ctx) => {
    ctx.beginPath();
    ctx.rect(this.position.x - this.width / 2, this.position.y - this.height / 2, this.width, this.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.fill();
    ctx.closePath();
  }

  getRect = () => {
    return {
      x: this.position.x - this.width / 2,
      y: this.position.y - this.height / 2,
      width: this.width,
      height: this.height,
    }
  }
}

// update = (ctx) => {
//   this.position.addTo(this.velocity);
//   if (this.position.x < this.width / 2) {
//     this.position.x = this.width / 2 + 1;
//   }
//   if (this.position.x > ctx.canvas.width - this.width / 2) {
//     this.position.x = ctx.canvas.width - this.width / 2
//   }
// }

// hitTest = (target) => {
//   const rect1 = this.getRect();
//   const rect2 = target; // target.getRect();
//   return (rect1.x <= rect2.x + rect2.width &&
//           rect1.x + rect1.width >= rect2.x &&
//           rect1.y <= rect2.y + rect2.height &&
//           rect1.y + rect1.height >= rect2.y)
// }