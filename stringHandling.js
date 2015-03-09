var readline = require("readline");
var prompt = readline.createInterface(process.stdin,process.stdout);

function getPassword() {
	prompt.question("Please enter a password for verification: ", function(userPassword) {
		checkPassword(userPassword);
	})
}

function checkPassword(userPassword) {
	if(userPassword.length >=10 && userPassword.match(/[A-Z!]/)) {
		console.log( userPassword + " is a valid password");
	} else {
		console.log( userPassword + " is not a valid password. You must have a capital letter or an exclimation point(!) and be over 10 characters long");
	}
	prompt.close();
}

getPassword();
