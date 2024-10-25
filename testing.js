function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let left = []
  let right = []
  let pivot = arr[arr.length - 1]

  for (let count = 0; count < arr.length - 1; count++) {
    if (arr[count] < pivot) {
      left.push(arr[count])
    } else {
      right.push(arr[count])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

let array = [-6, 20, 8, -2, 4]
console.log(quickSort(array))

function descendingQuickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let left = []
  let right = []
  let pivot = arr[arr.length - 1]

  for (let count = 0; count < arr.length - 1; count++) {
    if (arr[count] < pivot) {
      right.push(arr[count])
    } else {
      left.push(arr[count])
    }
  }

  return [...descendingQuickSort(left), pivot, ...descendingQuickSort(right)]
}

console.log(descendingQuickSort(array))
