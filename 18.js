'use strict'
function common(str1,str2){
	let arr = [];
	for (let i = 0 ; i < str1.length ; i++){
		for (let j = 0 ; j < str2.length ; j++){
		 	if (str1[i] == str2[j]){
		 		arr.push(str2[i]);	
		 	}
		}
	}
	return arr.filter((v,i,s)=>{ return s.indexOf(v) === i});
}

console.log(common('string','strike'));
