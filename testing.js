function bubbleSort(arr) {
  let swapped
  do {
    swapped = false
    for (let count = 0; count < arr.length - 1; count++) {
      if (arr[count] > arr[count + 1]) {
        let temp = arr[count]
        arr[count] = arr[count + 1]
        arr[count + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

console.log(bubbleSort([-6, 8, -2, 4, 20]))
console.log(bubbleSort([4, 8, 9, 2, 15]))
console.log(bubbleSort([-1, -9, 8, 2, 1, 5]))

function bubbleSortDescending(arr) {
  let swapped
  do {
    swapped = false
    for (let count = 0; count < arr.length; count++) {
      if (arr[count] < arr[count + 1]) {
        let temp = arr[count]
        arr[count] = arr[count + 1]
        arr[count + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

console.log(bubbleSortDescending([-6, 8, -2, 4, 20]))
console.log(bubbleSortDescending([4, 8, 9, 2, 15]))
console.log(bubbleSortDescending([-1, -9, 8, 2, 1, 5]))
