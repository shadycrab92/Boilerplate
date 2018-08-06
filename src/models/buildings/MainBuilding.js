import Production from "src/models/shared/Production"

import buildingsConfig from "src/configs/buildings.json"

export default class MainBuilding extends Building {
  constructor(x, y, level){
    super(x, y, "MainBuilding", level);

    this.production = new Production(buildingsConfig["MainBuilding"].availableProducts);
  }

  update(){
    super.update();
    this.production.makeProgress(this.stats.productivity);
  }
}

