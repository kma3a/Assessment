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
			this.hungry +=1;
			this.tired -=2;
			this.energy += 1;
			console.log(this.name + " slept peacefully.");
		} else {
			console.log( this.name + " is not tired and bites you!");
		}	
	};

	Tiger.prototype.learn = function() {
		if (this.energy > 0) {
			this.energy -=2;
			this.tired += 1;
			this.hungry +=1;
			console.log(this.name + " learned how to growl on command!");
		} else {
			console.log(this.name + " is too tired to move and bites you!");
		}
	};

	Tiger.prototype.feed = function() {
		if (this.hungry > 0 )	{
			this.hungry -=2;
			this.energy +=1;
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


	Tiger.prototype.takeMeds = function() {
		if (this.healthy === false) {
			this.tired = 7;
			this.hungry = 5;
			this.energy = 4;
			this.healthy = true;
			console.log("You gave " + this.name + " meds and is now healthy!");
			return true;
	  	} else{
			console.log("You can't give a healthy tiger medicine are you crazy?!?!?!?");
			return false;
		}
	};
	

function Player(name) {
	this.name = name;
	this.hasMeds = 2;
	this.points = 40;
}
	Player.prototype.checkHaveMeds = function() {
		return this.hasMeds > 0;
	};
	
	Player.prototype.removeMeds = function() {
		if (this.hasMeds >= 0) {
			this.hasMeds--;
		}
	};




function checkHealth() {
	if ( myTiger.energy === 0 || myTiger.tired === 10 || myTiger.hungry === 10) {
		myTiger.dead = true;
		zooKeeper.points -= 70;
	} else if (myTiger.energy <=2 || myTiger.tired >= 8 || myTiger.hungry >= 8) {
		myTiger.healthy = false;
		zooKeeper.points -= 35;
	} else {
		myTiger.healthy = true;
		zooKeeper.points += 20;
	}
}

function checkMeds() {
	if (zooKeeper.checkHaveMeds()) {
		giveTigerMeds();
	} else {
		console.log("You don't have meds to give " + myTiger.name);	
	}
}

function giveTigerMeds(){
	if (myTiger.takeMeds()) {
		zooKeeper.removeMeds();
		zooKeeper.points += 10;
		console.log("You have " + zooKeeper.hasMeds + " meds left");
	}
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
	var zooKeeperName = getUserInput("What is your name again?");
	zooKeeper = new Player(zooKeeperName);
	console.log(" Welcome " + zooKeeper.name + " You will be in charge of our new baby tiger.");
}

function getTigerName(){
	var tigerName = getUserInput("What would you like to name the tiger?");
	myTiger = new Tiger(tigerName);
}

function getUserInput(saying) {
	var word = sget(saying).trim();
	return checkValid(word);
}

function continueGame() {
	if (myTiger.dead) {
		return endGameBad();
	} else {
		return chooseTask();
	}
}

function endGameBad() {
	console.log( myTiger.name + " has died");
	var startAgain = sget("Would you like to start again? (y/n)").trim();
	if (startAgain === 'y') {
		getTigerName();
		return chooseTask();
	} else if (startAgain === "n") {
		return console.log("Thanks for playing. You total points are " + zooKeeper.points);
	} else {
		console.log("Please enter something valid.");
		return arguments.callee();
	}
}		

function checkValid(word) {
	if (word === '') {
		return getWord("Sorry that is not valid try again");
	} else {
		return word;
	}
}
function displayStartGame() {
	console.log("1 - Feeds the tiger");
	console.log("2 - Lets the tiger sleep");
	console.log("3 - you take time to train the tiger");
	console.log("4 - you check the health of the tiger");
	console.log("5 - gives the tiger meds.");
	console.log("exit - quits the game");
}

function getUserInput(saying) {
	return sget(saying).trim();
}

function chooseTask() {
	displayStartGame();
	var userInput = getUserInput("What would you like to do? ");
	switch (userInput) {
		case '':
			console.log("don't hesitate take care of " + myTiger.name);
			arguments.callee();
			break;
		case '1':
			myTiger.feed();
			checkHealth();
	 		continueGame();
			break;
		case '2':
			myTiger.sleep();
			checkHealth();
			continueGame();
			break;
		case '3':
			myTiger.learn();
			checkHealth();
			continueGame();
			break;
		case '4':
			myTiger.checkHealthStatus();
			continueGame();
			break;
		case '5':
			checkMeds();
			continueGame();
			break;
		case "exit":
			exitGame();
			break;
		default: 
			console.log("You can't do that.");
			arguments.callee();
			break;
	}
}

function exitGame() {
	console.log(myTiger.name + " Will miss you! Your total points are " + zooKeeper.points + " Thanks for playing!");
}

startGame();
