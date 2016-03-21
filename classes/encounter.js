function Encounter(){}
Encounter.prototype = new Card();
Encounter.prototype.flip
Encounter.prototype.place
Encounter.prototype.remove
Encounter.prototype.getConquered
Encounter.prototype.choices = []

function Monster(){}
Monster.prototype = new Encounter();
