'use strict'
function same(arr1,arr2){
	if (arr1.length == arr2.length){
		for (let i = 0 ; i < arr1.length ; i++)
			if (arr1[i] != arr2[i])
				return false;
		return true;
	}
	return false;
}

console.log(same([1,2,3],[1,2,3]));
console.log(same([1,2,3],[1,1,1]));
