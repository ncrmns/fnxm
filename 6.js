'use strict'
function diagonal(num){
	let matrix = [];

	for ( let i = 0 ; i < num ; i++){
		let row = [];

		for ( let j = 0 ; j < num ; j++)
			i == j ? row[j] = 1 : row[j] = 0;
		
			matrix.push(row);
	}
	return matrix;
}

console.log(diagonal(8));
