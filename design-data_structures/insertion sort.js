function insertionSort(array) {
    const length = array.length;
  
    for (let i = 1; i < length; i++) {
      let currentValue = array[i];
      let j = i - 1;
  
      // Shift elements greater than the current value to the right
      while (j >= 0 && array[j] > currentValue) {
        array[j + 1] = array[j];
        j--;
      }
  
      // Place the current value at the correct position
      array[j + 1] = currentValue;
    }
  
    return array;
  }
  
  // Example usage:
  const array = [8, 3, 1, 5, 2, 10, 7, 6];
  const sortedArray = insertionSort(array);
  console.log(sortedArray);
  