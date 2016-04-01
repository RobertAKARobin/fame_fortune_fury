"use strict";

(function(){

  var game = new Game(function whenLoaded(){
    h.for_each(game.encounters, function(card, key){
      var html = card.render();
      document.body.innerHTML += html;
    });
  });

})();
