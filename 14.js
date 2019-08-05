'use strict'
function splitter(string,div){
	let arr = [];
	let str = '';
	let ret = [];
 	for (let i = 0 ; i < string.length ; i++){
 		if (string[i] != div){
			str += string[i];
		} else {
			ret.push(str);
			str = '';
 		}
 	}
	return ret;
}

console.log(splitter('a,bcd,e,fg',','));
