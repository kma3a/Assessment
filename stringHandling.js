var readline = require("readline");
var prompt = readline.createInterface(process.stdin,process.stdout);

function getPassword() {
	prompt.question("Please enter a password for verification: ", function(userPassword) {
		checkPassword(userPassword);
	})
}

function checkPassword(userPassword) {
	if( checkPasswordLength(userPassword) && checkSpecialChar(userPassword) ) {
		console.log( "Your password is valid!");
	} else {
		console.log( "Your password is NOT valid. You must have a capital letter or an exclimation point(!) and be over 10 characters long");
	}
	prompt.close();
}

function checkPasswordLength(userPassword){
	return userPassword.length >=10;
}

function checkSpecialChar(userPassword) {
	return userPassword.match(/[A-Z!]/);
}

getPassword();
