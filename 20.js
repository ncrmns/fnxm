'use strict'
function second(arr){
	let max = [0,0];
	for (let i = 0 ; i < arr.length ; i++){
		if (arr[i] > max[0]){
			max[1] = max[0];
			max[0] = arr[i];
		} else if (arr[i] > max[1]){
			max[1] = arr[i];
		}
	}
	return max[1];
}

console.log(second([1,2,3,4,8,6,7,0]));
