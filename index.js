function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let prevIndex = i - 1
    let numberToInsert = arr[i]
    while (prevIndex >= 0 && arr[prevIndex] > numberToInsert) {
      arr[prevIndex + 1] = arr[prevIndex]
      prevIndex--
    }
    arr[prevIndex + 1] = numberToInsert
  }
  return arr
}

const array = [20, 7, 10, 4, 15, 9, 3, 22]

console.log(insertionSort(array))
