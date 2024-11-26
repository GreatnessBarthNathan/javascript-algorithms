function bubbleSort(arr) {
  let swapped
  do {
    swapped = false
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let prev = arr[i]
        arr[i] = arr[i + 1]
        arr[i + 1] = prev
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

const array = [20, 7, 10, 4, 15, 9, 3, 22]

console.log(bubbleSort(array))
