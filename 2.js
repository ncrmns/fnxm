'use strict'
function reverse(string){
	let retString = '';
	for (let i = 0 ; i < string.length ; i++){
		retString += string[string.length - 1 - i];
	}
	return retString;
}

console.log(reverse("string"));
