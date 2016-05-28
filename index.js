
'use strict';

function diffArray(arr1, arr2) {
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

const result = diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]);
console.log(result);
