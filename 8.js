'use strict'
function mixing(arr1,arr2){
	let arr3 = [];
	for (let i = 0 ; i < arr1.length ; i++){
		arr3.push(arr1[i],arr2[i]);
	}
	return arr3;
}

console.log(mixing([1,2,3],[6,7,8]));
