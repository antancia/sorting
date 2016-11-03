function mergeSort(arr) {
	var merged = [];


if (!Array.isArray(arr)) {
  	throw new Error("no thank you");
  }

if (Array.isArray(arr)){
  for (var i = 0; i < arr.length; i++) {
  	if (typeof arr[i] !== 'number') {
  		throw Error("That is not a number!");
  		}
  	}
  }

	if (arr.length <= 1) {
		return arr;
	}

	var middle = Math.floor(arr.length / 2)
	var left = arr.slice(0, middle);
	var right = arr.slice(middle);


	var leftArr = mergeSort(left);
	var rightArr = mergeSort(right);
	var leftIndex = 0;
	var rightIndex = 0;

	while ((leftIndex < leftArr) && (rightIndex < rightArr)) {

		if (leftArr[leftIndex] < rightArr[rightIndex]) {
			merged.push(leftArr[leftIndex]);
			merged.push(rightArr[rightIndex]);
		} else {
			merged.push(rightArr[rightIndex]);
			merged.push(leftArr[leftIndex]);
		}


		leftIndex++;
		rightIndex++;
	}

	return merged;
}