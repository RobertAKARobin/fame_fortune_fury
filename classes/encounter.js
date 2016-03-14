function Encounter(){}
Encounter.prototype = new Card();
Encounter.prototype.flip
Encounter.prototype.place
Encounter.prototype.remove
Encounter.prototype.getConquered
Encounter.prototype.choices = []
Encounter.types = [
  "monster",
  "village"
]
Encounter.terrains = [
  "plains",
  "river",
  "swamp",
  "forest",
  "mountain",
  "desert"
]


function Monster(){}
Monster.prototype = new Encounter();
