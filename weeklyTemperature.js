var readline = require('readline');
var prompt = readline.createInterface(process.stdin, process.stdout);

var weeklyTemperatures = [];

function getTemperature() {
	prompt.question("Enter the temperature: ", function(inputTemperature){
		checkUserInput(inputTemperature);
	})
}

function checkUserInput(inputTemperature) {
	if (isNaN(inputTemperature)) {
		console.log("Please enter the input in the form of a number");
		getTemperature();
	} else {
		weeklyTemperatures.push(inputTemperature);
		checkEnd();
	}
}

function checkEnd() {
	if (weeklyTemperatures.length === 7) {
		console.log("Your average temperature is " + averageTemperature());
		prompt.close();
	} else {
		console.log("You currently have " + weeklyTemperatures);
		getTemperature();
	}
}

function averageTemperature() {
	temperatureSum = weeklyTemperatures.reduce(function(a,b) {
		return a + b;
	});
	return temperatureSum / weeklyTemperatures.lengt;h
}

getTemperature();
