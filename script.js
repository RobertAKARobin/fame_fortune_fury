"use strict";

(function(){

  var game = new Game(function whenLoaded(){
    h.for_each(game.deck.encounters.cards, function(encounter, key, next){
      encounter.render(function(){
        encounter.place();
        next();
      });
    }, true);
  });

})();
