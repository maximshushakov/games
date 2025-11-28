export default class Vector {
  x = 0;
  y = 0;

  constructor(x, y) {
    if (x) this.x = x;
    if (y) this.y = y;
  }

  get angle() {
    return Math.atan2(this.y, this.x);
  }

  set angle(value) {
    const length = this.length;
    this.x = Math.cos(value) * length;
    this.y = Math.sin(value) * length;
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  set length(value) {
    const angle = this.angle;
    this.x = Math.cos(angle) * value;
    this.y = Math.sin(angle) * value;
  }

  add(v2) {
    return new Vector(this.x + v2.x, this.y + v2.y);
  }

  subtract(v2) {
    return new Vector(this.x - v2.x, this.y - v2.y);
  }

  multiply(value) {
    return new Vector(this.x * value, this.y * value);
  }

  addTo(v2) {
    this.x += v2.x;
    this.y += v2.y;
  }

  subtractTo(v2) {
    this.x -= v2.x;
    this.y -= v2.y;
  }
}
