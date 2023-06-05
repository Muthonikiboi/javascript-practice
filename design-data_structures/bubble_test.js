function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
      for (var j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
      // Display the current state of the array after each pass
      console.log("Pass", i + 1, ":", arr);
    }
    return arr;
  }
  
  // Example usage:
  var numbers = [7, 3, 9, 4, 2, 8, 1, 6, 5];
  console.log("Original array:", numbers);
  
  var sortedNumbers = bubbleSort(numbers);
  console.log("Sorted array:", sortedNumbers);
  