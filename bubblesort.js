function bubbleSort(arr, index=0, length=arr.length) {

  if(!Array.isArray(arr)) {
  	throw new Error("give us something else...an array, maybe");
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