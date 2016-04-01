"use strict";

(function(){

  var game = new Game(function whenLoaded(){
    h.forEach(game.encounters, function(value, key){
      console.log(value)
    });
  });

})();
