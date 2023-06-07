function quickSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const pivot = array[array.length - 1];
    const left = [];
    const right = [];
  
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] < pivot) {
        left.push(array[i]);
      } else {
        right.push(array[i]);
      }
    }
  
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  // Example usage:
  const array = [8, 3, 1, 5, 2, 10, 7, 6];
  const sortedArray = quickSort(array);
  console.log(sortedArray);
  