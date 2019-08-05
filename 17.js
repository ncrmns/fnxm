'use strict'
function shifter(arr,num){
	let arr1 = arr.slice(arr.length-num);
	let arr2 = arr.slice(0, arr.length-num);
	return arr1.concat(arr2);
}

console.log(shifter([1,2,3,4,5],2));
