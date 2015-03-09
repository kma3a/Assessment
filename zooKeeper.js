function Tiger(name) {
	this.name = name;
	this.hungry = 3;
	this.energy = 3;
	this.healthy = true;
	this.tired = 5;
}

function Player(name) {
	this.name = name;
}

var zooKeeper;
var myTiger;

function startGame() {
	console.log("Welcome to the Detroit Labs Zoo");
	console.log("We are proud you to have you join us as a new zoo keeper");
	var zooKeeperName = sget("What is your name again?");
	zooKeeper = new Player(zooKeeperName);
	console.log("Welcome " + zooKeeper.name + " You will be in charge of our new baby tiger.");
}		
