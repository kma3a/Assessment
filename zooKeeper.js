var sget = require('sget');

function Tiger(name) {
	this.name = name;
	this.hungry = 5;
	this.energy = 6;
	this.healthy = true;
	this.tired = 5;
	this.dead = false;

}

	Tiger.prototype.sleep = function(){
		if (this.tired > 0) {	
			this.hungry +=2;
			this.tired -=3;
			this.energy += 1;
			console.log(this.name + " slept peacefully.");
		} else {
			console.log( this.name + " is not tired and bites you!");
		}	
	};

	Tiger.prototype.learn = function() {
		if (this.energy > 0) {
			this.energy -=3;
			this.tired += 2;
			this.hungry +=1;
			console.log(this.name + " learned how to growl on command!");
		} else {
			console.log(this.name + " is too tired to move and bites you!");
		}
	};

	Tiger.prototype.feed = function() {
		if (this.hungry > 0 )	{
			this.hungry -=3;
			this.energy +=2;
			this.tired +=1;
			console.log(this.name + " ate happyly!");
		} else {
			console.log(this.name + " is not hungry and bites you!");
		}
	};

	Tiger.prototype.checkHealthStatus = function() {
		console.log(this.name + " the Tiger is: ");
		console.log("Tired: " + this.tired );
		console.log("Energy: " + this.energy );
		console.log("Hungry: " + this.hungry );
		console.log("Healthy: " + this.healthy );
	};

	Tiger.prototype.checkHealth = function() {
		if (this.energy <2 || this.tired > 9 || this.hungry > 9) {
			this.healthy = false;
		}
	};

	Tiger.prototype.giveMeds = function(haveMeds) {
		if (this.healthy === false && haveMeds <= 0) {
			this.tired = 7;
			this.hungry = 5;
			this.energy = 4;
			this.healthy = true;
	  	} else{
			console.log("You can't give a healthy tiger medicine are you crazy?!?!?!?");
		}
	};

function Player(name) {
	this.name = name;
	this.hasMeds = 2;
}

var zooKeeper;
var myTiger;

function startGame() {
	console.log(" Welcome to the Detroit Labs Zoo\n We are proud you to have you join us as a new zoo keeper");
	getKeeperName();
	getTigerName();
	console.log(" Great ZooKeeper " + zooKeeper.name + ", you will be in charge of " + myTiger.name + " the Tiger.\n be careful " + myTiger.name + " might bite!.");
	chooseTask();
}	

function getKeeperName() {
	var zooKeeperName = getWord("What is your name again?");
	zooKeeper = new Player(zooKeeperName);
	console.log(" Welcome " + zooKeeper.name + " You will be in charge of our new baby tiger.");
}

function getTigerName(){
	var tigerName = getWord("What would you like to name the tiger?");
	myTiger = new Tiger(tigerName);
}

function getWord(saying) {
	var word = sget(saying).trim();
	return checkValid(word);
}

function checkValid(word) {
	if (word === '') {
		return getWord("Sorry that is not valid try again");
	} else {
		return word;
	}
}


function chooseTask() {
	console.log("1 - Feeds the tiger");
	console.log("2 - Lets the tiger sleep");
	console.log("3 - you take time to train the tiger");
	console.log("4 - you check the health of the tiger");
	console.log("5 - gives the tiger meds.");
	console.log("exit - quits the game");
	var userInput = sget("What would you like to do? ").trim();
	switch (userInput) {
		case '1':
			myTiger.feed();
			myTiger.checkHealth();
	 		chooseTask();
			break;
		case '2':
			myTiger.sleep();
			myTiger.checkHealth();
			chooseTask();
			break;
		case '3':
			myTiger.learn();
			myTiger.checkHealth();
			chooseTask();
			break;
		case '4':
			myTiger.checkHealthStatus();
			chooseTask();
			break;
		case '5':
			myTiger.giveMeds();
			chooseTask();
			break;
		case "exit":
			exitGame();
			break;
		case '':
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
