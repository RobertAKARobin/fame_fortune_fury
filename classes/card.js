function Deck(){}
Deck.prototype.load = function(klass, whenLoaded){
  var deck = this;
  var directory = klass.name.toLowerCase() + "s";
  h.ajax("./cards/" + directory + "/_index.json", function(index){
    h.forEach(index, function(name, i, next){
      h.ajax("./cards/" + directory + "/" + name + ".json", function(data){
        var card = new klass();
        h.extend(card, data);
        deck[name] = card;
        next();
      });
    }, whenLoaded);
  });
}
Deck.prototype.shuffle;
Deck.prototype.draw;
Deck.prototype.search;

function Card(){}
Card.prototype.render = function(){

}
