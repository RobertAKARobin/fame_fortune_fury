function Item(){}
Item.prototype = new Card()
Item.prototype.gain
Item.prototype.lose
Item.prototype.sell
Item.prototype.buy


function Castable(){}
Castable.prototype = new Item()


function Scroll(){}
Scroll.prototype = new Castable()


function Wand(){}
Wand.prototype = new Castable()


function Equippable(){}
Equippable.prototype = new Item()
Equippable.prototype.bless
Equippable.prototype.curse


function Armor(){}
Armor.prototype = new Equippable()


function Weapon(){}
Weapon.prototype = new Equippable()
Weapon.types = {

}
