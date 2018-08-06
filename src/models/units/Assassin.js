import Unit from "src/models/units/base/Unit"

export default class Assassin extends Unit {
  constructor(x, y, level){
    super(x, y, "Assassin", level);
  }
}

