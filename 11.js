'use strict'
function anagram(str1,str2){
	return str1.split('').sort().join('') == str2.split('').sort().join('');
}

console.log(anagram('abba','baba'));
console.log(anagram('kaka','nana'));
