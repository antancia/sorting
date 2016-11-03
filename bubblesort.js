function bubbleSort(arr, index=0, length=arr.length) {

  if(!Array.isArray(arr)) {
  	throw new Error("no thank you");
  }

  if (Array.isArray(arr)){
  	for (var i = 0; i < arr.length; i++) {
  		if (typeof arr[i] !== 'number') {
  			throw Error("That is not a number!");
  		}
  	}
  }

  if (index > length) {
  	return arr;
  } else if (index === (length - 1)) {
  	return bubbleSort(arr, 0, length-1);
  } else if (arr[index] > arr[index + 1]) {
  	var temp = arr[index];
  	arr[index] =arr[index + 1];
  	arr[index + 1]  = temp;
  	// index = index++;
  	return bubbleSort(arr, index + 1, length);
  } else {
  	// index = index++;
  	return bubbleSort(arr, index + 1, length);
  }



}