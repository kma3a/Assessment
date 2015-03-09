var readline = require('readline');
var prompt = readline.createInterface(process.stdin, process.stdout);

var weeklyTemperatures = new Array(7);

function getTemperature() {
	prmopt.question("Enter the temperature: ", function(inputTemperature){
		checkUserInput(inputTemperature);
	})
}

function checkUserInput(inputTemperature) {
	if (isNaN(inputTemperature) {
		console.log("Please enter the input in the form of a number");
		getTemperature();
	} else {
		weeklyTemperatures.push(inputTemperature);
		checkEnd();
	}
}
