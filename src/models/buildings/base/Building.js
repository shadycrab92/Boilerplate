import Area from "src/models/shared/Area"
import Stats from "src/models/shared/Stats"

import buildingsConfig from "src/configs/buildings.json"

export default class Building {
  constructor(x, y, type, level) {
    this.x = x;
    this.y = y;

    const config = buildingsConfig[type];
    const defaultStats = config.stats[level];

    this.stats = new Stats(defaultStats);
    this.area = new Area(x, y, config.width, config.height);
  }

  get rectangle(){
    return this.area.rectangle;
  }

  get attack(){
    return {
      meleePower: this.stats.meleePower,
      rangePower: this.stats.rangePower,
      critChance: this.stats.critChance,
      critMultiplier: this.stats.critMultiplier,
      splash: this.stats.splash,
      range: this.stats.range
    }
  }

  get defense(){
    return {
      armor: this.stats.meleePower,
      dodgeChance: this.stats.dodgeChance,
      blockChance: this.stats.blockChance,
      blockMultiplier: this.stats.blockMultiplier,
    }
  }

  setPosition(x, y){
    this.x = x;
    this.y = y;
  }

  setHealth(health){
    this.health = health;
  }
}

