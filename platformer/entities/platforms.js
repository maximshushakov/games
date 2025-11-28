import { AABB, intersectAABB } from "./AABB.js";

const data = [
  { x: 30,  y: 280, width: 300, height: 10 },
  { x: 300, y: 250, width: 100, height: 10 },
  { x: 300, y: 350, width: 200, height: 10 },
  { x: 100, y: 260, width: 20,  height: 10 },
  { x: 480, y: 330, width: 20,  height: 10 },
  { x: 360, y: 230, width: 20,  height: 10 },
  { x: 550, y: 300, width: 20,  height: 10 },
  { x: 450, y: 280, width: 20,  height: 10 },
  { x: 0, y: 500, width: 800,  height: 10 },
  { x: 0, y: 0, width: 10,  height: 500 },
  { x: 790, y: 0, width: 10,  height: 500 },

  { x: 500, y: 450, width: 20,  height: 10 },
  { x: 550, y: 430, width: 20,  height: 10 },
  { x: 450, y: 470, width: 20,  height: 10 },
  { x: 490, y: 400, width: 20,  height: 10 },
  { x: 530, y: 380, width: 20,  height: 10 },
];

const entities = data.map(data => AABB.create(data));
entities[15].moving = true;
entities[15].max = 600;
entities[15].min = 500;
entities[15].vx = 1;

export const platforms = {
  entities,
  update: () => {
    entities.forEach(platform => {
      if (platform.moving && platform.right > platform.max || platform.left < platform.min) {
        platform.vx = platform.vx * -1;
      }
      platform.update();
    })
  },
  render: (ctx) => {
    entities.forEach(platform => {
      ctx.fillStyle = "#45597E";
      ctx.fillRect(platform.left, platform.top, platform.width, platform.height);
    });
  }
};
