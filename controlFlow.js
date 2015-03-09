var readline = require("readline");
var prompt = readline.createInterface(process.stdin, process.stdout);

var numberArray = [];

function getNumbers(){
	prompt.question("Enter a number: ", function(userInput) {
		if (isNaN(userInput)){	
			notANumberTryAgain(userInput);	
		} else {
			putNumberIntoArray(userInput);
		}	
	})
}

function sortArray(){
	numberArray.sort();
	console.log(numberArray);
}

function notANumberTryAgain(userInput) {
	console.log(userInput + " is not a number. Try again.");
	getNumbers();
}

function putNumberIntoArray(userInput) {
	numberArray.push(userInput);
	checkEndCase();	
}

function checkEndCase(){
	if (numberArray.length === 3){
		sortArray();
		prompt.close();
	} else {
		getNumbers();
	}
}

getNumbers();
