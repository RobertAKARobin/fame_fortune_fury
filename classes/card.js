function Deck(){}
Deck.prototype.load = function(klass, cardsLoaded){
  var deck = this;
  var klassname = klass.name.toLowerCase();
  h.ajax("./templates/" + klassname + ".html", loadTemplate);
  function loadTemplate(html){
    klass.template = html.split(/\{\{.*?\}\}/);
    klass.fields = [];
    html.replace(/\{\{(.*?)\}\}/g, function(a, field){
      klass.fields.push(field);
    });
    templatesLoaded();
  }
  function templatesLoaded(){
    h.ajax("./cards/" + klassname + "s/_index.json", loadCards);
  }
  function loadCards(index){
    h.for_each(index, function(name, i, next){
      h.ajax("./cards/" + klassname + "s/" + name + ".json", function(data){
        var card    = new klass();
        card.class  = klass;
        card.deck   = deck;
        deck[name]  = card;
        h.extend(card, data);
        next();
      });
    }, cardsLoaded);
  }
}
Deck.prototype.shuffle;
Deck.prototype.draw;
Deck.prototype.search;

function Card(){}
Card.prototype.render = function(){
  var card = this;
  var output = "";
  h.for_each(card.class.template, function(snippet, i){
    var field = card.class.fields[i - 1];
    if(i > 0) output += card[field];
    output += snippet;
  });
  return output;
}
