function Deck(klass){
  var deck = this;
  deck.cards = {};
  deck.class = klass;
  deck.classname = deck.class.name.toLowerCase();
}
Deck.prototype.load = function(cardsLoaded){
  var deck = this;
  h.ajax("./templates/" + deck.classname + ".html", loadTemplate);
  function loadTemplate(html){
    deck.class.template = html.split(/\{\{.*?\}\}/);
    deck.class.fields = [];
    html.replace(/\{\{(.*?)\}\}/g, function(a, field){
      deck.class.fields.push(field);
    });
    templateLoaded();
  }
  function templateLoaded(){
    h.ajax("./cards/" + deck.classname + "s/_index.json", loadCards);
  }
  function loadCards(cardList){
    h.for_each(cardList, function(listItem, abbr, next){
      h.ajax("./cards/" + deck.classname + "s/" + abbr + ".html", function(html){
        var card    = new deck.class();
        card.class  = deck.class;
        card.deck   = deck;
        card.html   = html;
        card.abbr   = abbr;
        deck.cards[abbr] = card;
        h.extend(card, listItem);
        if(card.title === undefined){
          card.title = h.collect(card.abbr.split("_"), function(word){
            return h.capitalize(word);
          }).join(" ");
        }
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
  var card    = this;
  var output  = "";
  h.for_each(card.class.template, function(snippet, i){
    var field = card.class.fields[i - 1];
    if(i > 0) output += card[field];
    output += snippet;
  });
  card.el = document.createElement("DIV");
  card.el.innerHTML = output;
}
