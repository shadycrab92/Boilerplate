import Unit from "src/models/units/base/Unit"

export default class Trooper extends Unit {
  constructor(x, y, level){
    super(x, y, "Trooper", level);
  }
}

