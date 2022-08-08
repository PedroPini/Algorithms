//  QuickSort
function quickSort(array) {
  if (array.length == 1) {
    return array;
  }
  const pivot = array[array.length - 1];
  const leftArr = [];
  const rightArr = [];
  for (i = o; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArr.push(array[i]);
    } else {
      rightArr.push(array[i]);
    }
  }

  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...quickSort(leftArr), pivot];
  } else {
    return [pivot, ...quickSort(rightArr)];
  }

  return array;
}
console.log("Hello, World!");
