'use strict'
function avarage(arr){
	let avg = 0;
	let count = 0;
	for (let i = 0 ; i < arr.length ; i++){
		if (arr[i] % 2 == 0){
			count++;
			avg += arr[i];
		}
	}
	return avg/count;
}
