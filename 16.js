'use strict'
function joiner(arr,letter){
	let string = '';
	for (let i = 0 ; i < arr.length ; i++){
		string += arr[i] + letter;
	}
	return string;
}

console.log(joiner(['ab','cd','ef'],' '));
