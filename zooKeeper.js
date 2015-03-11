var sget = require('sget');

function Tiger(name) {
	this.name = name;
	this.hungry = 5;
	this.energy = 6;
	this.healthy = true;
	this.tired = 5;
	this.sleep = function(){
		this.hungry +=2;
		this.tired -=3;
		this.energy += 1;
	};
	this.learn = function() {
		this.energy -=3;
		this.tired += 2;
		this.hungry +=1;
	};
	this.feed = function() {
		this.hungry -=3;
		this.energy +=2;
		this.tired +=1;
	};
	this.checkHealthStatus = function() {
		console.log(this.name + " the Tiger is: ");
		console.log("Tired: " + this.tired );
		console.log("Energy: " + this.energy );
		console.log("Hungry: " + this.hungry );
		console.log("Healthy: " + this.healthy );
	};
	this.checkHealth = function() {
		if (this.energy <2 || this.tired > 9 || this.hungry > 9) {
			this.healthy = false;
		}
	};
	this.giveMeds = function() {
	   if (this.healthy === false) {
		this.tired = 7;
		this.hungry = 5;
		this.energy = 4;
		this.healthy = true;
	  } else{
		console.log("You can't give a healthy tiger medicine are you crazy?!?!?!?");
	}
	};
}

function Player(name) {
	this.name = name;
}

var zooKeeper;
var myTiger;

function startGame() {
	console.log(" Welcome to the Detroit Labs Zoo\n We are proud you to have you join us as a new zoo keeper");
	var zooKeeperName = sget("What is your name again?").trim();
	zooKeeper = new Player(zooKeeperName);
	console.log(" Welcome " + zooKeeper.name + " You will be in charge of our new baby tiger.");
	var tigerName = sget("What would you like to name the tiger?").trim();
	myTiger = new Tiger(tigerName);
	console.log(" Great ZooKeeper " + zooKeeper.name + ", you will be in charge of " + myTiger.name + " the Tiger.\n be careful " + myTiger.name + " might bite!.");
	chooseTask();
}	

function chooseTask() {
	console.log("feed - Feeds the tiger");
	console.log("sleep - Lets the tiger sleep");
	console.log("train - you take time to train the tiger");
	console.log("check health - you check the health of the tiger");
	console.log("give meds - gives the tiger meds.");
	console.log("exit - quits the game");
	var userInput = sget("What would you like to do? ").trim();
	switch (userInput) {
		case "feed":
		myTiger.feed();
		myTiger.checkHealth();
		chooseTask();
		break;
		case "sleep":
		myTiger.sleep();
		myTiger.checkHealth();
		chooseTask();
		break;
		case "train":
		myTiger.learn();
		myTiger.checkHealth();
		chooseTask();
		break;
		case "check health":
		myTiger.checkHealthStatus();
		chooseTask();
		break;
		case "give meds":
		myTiger.giveMeds();
		chooseTask();
		break;
		case "exit":
		exitGame();
		break;
		default: 
		console.log("You can't do that.");
		chooseTask();
		break;
	}
}

function exitGame() {
	console.log(myTiger.name + " Will miss you! Thanks for playing!");
}

startGame();
