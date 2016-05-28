
'use strict';

const includes = require('array-includes');

function diffArray1(arr1, arr2) {
	var newArr = [];
	arr1.forEach(item => {
		const index = arr2.indexOf(item);
		if (index > -1) {
			arr2.splice(index, 1);
		} else {
			newArr.push(item);
		}
		console.log(index);
	});
	return newArr.concat(arr2);
}

function diffArray2(arr1, arr2) {
	return arr1.concat(arr2).filter(item => {
		return !includes(arr1, item) || !includes(arr2, item);
	});
}

const result1 = diffArray1([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]);
const result2 = diffArray2([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]);
console.log(result1);
console.log(result2);
