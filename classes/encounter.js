function Encounter(){}
Encounter.prototype = new Card();
Encounter.prototype.flip
Encounter.prototype.place = function(){
  var encounter = this;
  document.body.appendChild(encounter.el);
}
Encounter.prototype.remove
Encounter.prototype.getConquered
Encounter.prototype.choices = []

function Monster(){}
Monster.prototype = new Encounter();
