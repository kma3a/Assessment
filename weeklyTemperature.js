var readline = require('readline');
var prompt = readline.createInterface(process.stdin, process.stdout);

var weeklyTemperatures = new Array(7);

function getTemperature() {
	prmopt.question("Enter the temperature: ", function(inputTemperature){
		checkUserInput(inputTemperature);
	})
}
