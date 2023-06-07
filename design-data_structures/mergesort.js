function mergeSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }
  
    // Append any remaining elements from the left and right arrays
    result = result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  
    return result;
  }
  
  // Example usage:
  const array = [8, 3, 1, 5, 2, 10, 7, 6];
  const sortedArray = mergeSort(array);
  console.log(sortedArray);
  