function Encounter(){}
Encounter.terrains = [
  "prairie",
  "mountain",
  "forest",
  "water",
  "swamp",
  "desert"
]
Encounter.prototype = new Card();
Encounter.prototype.flip
Encounter.prototype.place = function(){
  var encounter = this;
  var choices   = h.el("[data-choices]>*", encounter.el);
  h.for_each(choices, function(choice){
    choice.addEventListener("click", function(){
      var el = this;
      var isRoll  = el.hasAttribute("data-roll");
      var choice  = el.getAttribute("data-choice");
    });
  });
  document.body.appendChild(encounter.el);
}
Encounter.prototype.remove
Encounter.prototype.getConquered

function Monster(){}
Monster.prototype = new Encounter();
