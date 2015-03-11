var readline = require('readline');
var prompt = readline.createInterface(process.stdin, process.stdout);

var weeklyTemperatures = [];
var weekLength = 7;

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
	if (weeklyTemperatures.length === weekLength) {
		console.log("Your average temperature is " + averageTemperature());
		prompt.close();
	} else {
		console.log("You currently have " + weeklyTemperatures);
		getTemperature();
	}
}



function averageTemperature() {
	var temperatureSum = weeklyTemperatures.reduce(function (numberOne, numberTwo) {
		return Number(numberOne) + Number(numberTwo);
	});
	return (temperatureSum / weeklyTemperatures.length).toFixed(2);
}

getTemperature();
