'use strict'
function maxarr(arr){
	let max = 0;
	for (let i = 1 ; i < arr.length ; i+=2){
	 	if (max < arr[i]){
			max = arr[i];
		}
	}
	return max;
}

console.log(maxarr([1,3,8,6,7,4]));
