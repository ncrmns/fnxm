'use strict'
function sumrows(matrix){
	let matrix2 = [];
	for (let i = 0 ; i < matrix.length ; i++){
		let sum = 0;
		for (let j = 0 ; j < matrix.length ; j++){
			sum += matrix[i][j];
		}
		matrix2.push(sum);
	}
	return matrix2;
}
