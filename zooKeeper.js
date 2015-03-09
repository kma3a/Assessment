var sget = require('sget');

function Tiger(name) {
	this.name = name;
	this.hungry = 3;
	this.energy = 3;
	this.healthy = true;
	this.tired = 5;
	this.sleep = function(){
		this.hungry -=2;
		this.tired -=2;
		this.energy += 1;
	};
	this.learn = function() {
		this.energy -=2;
		this.tired += 2;
		this.hungry -=1;
	};
	this.feed = function() {
		this.hungry -=3;
		this.energy += 3;
		this.tired +=1;
	};
	this.checkHealthStatus = function() {
		console.log(this.name + " the Tiger is: ");
		console.log("Tired: " + this.tired ):
		console.log("Energy: " + this.energy ):
		console.log("Hungry: " + this.hungry ):
		console.log("Healthy: " + this.healthy ):
	};
	this.checkHealth = function() {
		if (this.energy <2 || this.tired > 9 || this.hungry > 9) {
			this.healthy = false;
		}
	};
	this.giveMeds = function() {
		this.tired = 7;
		this.hungry = 5;
		this.energy = 4;
	};
}

function Player(name) {
	this.name = name;
}

var zooKeeper;
var myTiger;

function startGame() {
	console.log("Welcome to the Detroit Labs Zoo");
	console.log("We are proud you to have you join us as a new zoo keeper");
	var zooKeeperName = sget("What is your name again?").trim();
	zooKeeper = new Player(zooKeeperName);
	console.log("Welcome " + zooKeeper.name + " You will be in charge of our new baby tiger.");
	var tigerName = sget("What would you like to name the tiger?").trim();
	myTiger = new Tiger(tigerName);
	console.log("Your name is " + zooKeeper.name + ", and your tiger's name is " + myTiger.name + ".");
}	

startGame();
