'use strict'
function rotate(matrix){
	let matrix2 = [];
 	for ( let i = 0 ; i < matrix.length ; i++){
	 	let row = '';
 		for ( let j = 0 ; j < matrix.length ; j ++)
			row += matrix[j][i];
		matrix2.push(row);
 	}
	return matrix2;
}

console.log(rotate(["abc","ijk","xyz"]));
