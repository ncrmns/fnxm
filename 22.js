'use strict'
function filtering(arr){
	let obj = {};
	let arr2 = [];
	let arr3 = [];

	for (let i = 0 ; i < arr.length ; i++)
		arr[i] in obj ? obj[arr[i]]++ : obj[arr[i]] = 1;

	for (let i = 0 ; i < arr.length ; i++)
		if (obj[arr[i]] > 1 )
			arr2.push(arr[i]);

	for (let i = 0 ; i < arr2.length ; i++)
		if (arr2.indexOf(arr2[i]) === i)
			arr3.push(arr2[i]);
	
	return arr3;
}

console.log(filtering([1,1,2,2,3,4,5,6,7,8,9,9]));
