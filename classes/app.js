function Game(){}


function Choice(){}
Choice.prototype.consequence


function Roll(){}
Roll.prototype = new Choice();
Roll.prototype.amount


function Player(){}
Player.prototype.roll
Player.prototype.advance
Player.prototype.conquer
Player.prototype.fight
Player.prototype.flee
Player.prototype.pay
Player.prototype.parley


function Status(){}
Status.prototype.gain
Status.prototype.lose
