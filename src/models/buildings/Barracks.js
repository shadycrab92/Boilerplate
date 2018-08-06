import Production from "src/models/shared/Production"

import buildingsConfig from "src/configs/buildings.json";

export default class Barracks extends Building {
  constructor(x, y, level){
    super(x, y, "Barracks", level);

    this.production = new Production(buildingsConfig["Barracks"].availableProducts);
  }

  update(){
    super.update();
    this.production.makeProgress(this.stats.productivity);
  }
}

