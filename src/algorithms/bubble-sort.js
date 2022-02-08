function bubbleSort(arr) {
  let swapped = false;
  do {
    swapped = false;
    arr.forEach((item, index) => {
      if (item > arr[index + 1]) {
        let temp = item;
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
        swapped = true;
      }
    });
  } while (swapped);

  return arr;
}

function bubbleSortWithForLoops(arr) {
  for (var i = 0; i < arr.length; i++) {
    //Notice that j < (length - i)
    for (var j = 0; j < arr.length - i - 1; j++) {
      //Compare the adjacent positions
      if (arr[j] > arr[j + 1]) {
        //Swap the numbers
        var tmp = arr[j]; //Temporary variable to hold the current number
        arr[j] = arr[j + 1]; //Replace current number with adjacent number
        arr[j + 1] = tmp; //Replace adjacent number with current number
      }
    }
  }
  return arr;
}

console.log(bubbleSortWithForLoops([5, 6, 1, 9, 2]));
