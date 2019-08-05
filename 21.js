'use strict'
function filtering(arr1,arr2){
	let ex = true;
	let arr3 = [];
	for (let i = 0 ; i < arr1.length ; i++){
		for (let j = 0 ; j < arr2.length ; j++){
			if (arr1[i] == arr2[j])
				ex = !ex;
		}
		if (ex) 
			arr3.push(arr1[i]);
		else 
			ex = !ex;
	}
	return arr3;
}

console.log(filtering([1,2,3,4,5,6,7,8,9],[1,2,5,6]));
