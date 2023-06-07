function selectionSort(array) {
    const length = array.length;
  
    for (let i = 0; i < length - 1; i++) {
      let minIndex = i;
  
      // Find the index of the minimum element in the remaining unsorted portion of the array
      for (let j = i + 1; j < length; j++) {
        if (array[j] < array[minIndex]) {
          minIndex = j;
        }
      }
  
      // Swap the current element with the minimum element found
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }
  
    return array;
  }
  
  // Example usage:
  const array = [8, 3, 1, 5, 2, 10, 7, 6];
  const sortedArray = selectionSort(array);
  console.log(sortedArray);
  