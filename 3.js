'use strict'
function palindrome(string){
	let string2 = '';
	for ( let i = 0 ; i < string.length ; i++){
		string2 += string[string.length - 1 - i];
	}
	return string == string2;
}

console.log(palindrome('kaki'));
console.log(palindrome('kakak'));
