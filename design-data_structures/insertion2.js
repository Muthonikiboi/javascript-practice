function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let currentValue = arr[i]
      let j
      for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j + 1] = arr[j]
      }
      arr[j + 1] = currentValue
    }
    return arr
  }
  console.log(insertionSort([2, 1, 3, 7, 5])) // [1, 2, 3, 5, 7]

  const arr=[26,27,20,24,25,21,23,22];
  console.log(arr);
  insertionSort(arr);
  console.log(arr);