'use strict'
function filtering(arr){
	let arr2 = [];
	for (let i = 0 ; i < arr.length ; i++ ) {
	 	if (arr.indexOf(arr[i]) === i){
	 		arr2.push(arr[i]);
	 	}
	}
	return arr2;
}

console.log(filtering([1,2,3,4,5,5,5,4,3,2,1]));
