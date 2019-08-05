'use strict'
function indices(string,letter){
	let arr = [];
	for (let i = 0 ; i < string.length ; i++){
		if (string[i] == letter)
			arr.push(i);
	}
	return arr;
}

console.log(indices('strings','s'));
