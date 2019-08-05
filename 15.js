'use strict'
function splitDouble(string){
	let arr = [];
	for ( let i = 0 ; i < string.length ; i+=2){
		arr.push(string[i]+string[i+1]);
	}
	return arr;
}

console.log(splitDouble('abcdef'));
