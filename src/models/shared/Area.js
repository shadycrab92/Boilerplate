export default class Area {
  constructor(x, y, w, h){
    this.x = x;
    this.y = y;
    this.x1 = x + w;
    this.y1 = y + h;

    this.w = w;
    this.h = h;
  }

  get rectangle(){
    return {
      x: this.x,
      y: this.y,
      x1: this.x1 + this.width,
      y1: this.y1 + this.height
    };
  }

  static isIntersecting(r1, r2) {
    [r1, r2] = [r1, r2].map(r => {
      return {x: [r.x, r.x1].sort(), y: [r.y, r.y1].sort()};
    });

    const noIntersect = r2.x[0] > r1.x[1] || r2.x[1] < r1.x[0] ||
      r2.y[0] > r1.y[1] || r2.y[1] < r1.y[0];

    return !noIntersect;
  };
}

