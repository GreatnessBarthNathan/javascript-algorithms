let array = [4, 20, 2, 6, 5, 17]

function insertionSort(arr) {
  for (let count = 1; count < arr.length; count++) {
    let numberToInsert = arr[count]
    let leftNumberIndex = count - 1

    while (leftNumberIndex >= 0 && arr[leftNumberIndex] > numberToInsert) {
      arr[leftNumberIndex + 1] = arr[leftNumberIndex] // meaning we changed the number to insert with the item on its left because the item on the left is greater
      leftNumberIndex-- // if the index was 0 it will now be -1
    }
    arr[leftNumberIndex + 1] = numberToInsert
  }
  return arr
}

console.log(insertionSort(array))

// [4, 20, 2, 6, 5]

function reverseInsertionSort(arr) {
  for (let count = 1; count < arr.length; count++) {
    let numberToInsert = arr[count]
    let leftNumberIndex = count - 1

    while (leftNumberIndex >= 0 && arr[leftNumberIndex] < numberToInsert) {
      arr[leftNumberIndex + 1] = arr[leftNumberIndex]
      leftNumberIndex--
    }
    arr[leftNumberIndex + 1] = numberToInsert
  }
  return arr
}
console.log(reverseInsertionSort(array))
