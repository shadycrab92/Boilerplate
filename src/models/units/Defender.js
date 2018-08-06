import Unit from "src/models/units/base/Unit"

export default class Defender extends Unit {
  constructor(x, y, level){
    super(x, y, "Defender", level);
  }
}

