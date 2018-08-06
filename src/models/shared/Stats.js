export default class Stats {
  constructor({
    level, str, agi, int,
    maxHealth, regenHealth,
    maxMana, regenMana,
    maxArmor, regenArmor,
    meleePower, rangePower, magicPower,
    range, splash, initiative, productivity
  }){
    this.level = level;
    this.str = str;
    this.agi = agi;
    this.int = int;

    this.maxHealth = maxHealth + str;
    this.regenHealth = regen + (str/10);

    this.maxMana = maxMana + int;
    this.regenMana = regen + (int/10);

    this.maxArmor = maxArmor + agi;
    this.regenArmor = regenArmor + agi/10;

    this.meleePower = meleePower + (agi + str)/2;
    this.rangePower = rangePower + (agi + int)/2;
    this.magicPower = magicPower + int;

    this.range = range;
    this.splash = splash;
    this.initiative = initiative;
    this.productivity = productivity;

    this.dodgeChance = 0.01 * (agi + int)/2;

    this.critChance = 0.01 * agi;
    this.critMultiplier = 1.1 + (0.01 * str);

    this.blockChance = 0.01 * str;
    this.blockMultiplier = 1.1 + (0.01 * int);
  }
}

