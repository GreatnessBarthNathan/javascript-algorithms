function binarySearch(arr, t) {
  let leftIndex = 0
  let rightIndex = arr.length - 1

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if (arr[middleIndex] === t) {
      return middleIndex
    }

    if (arr[middleIndex] < t) {
      leftIndex = middleIndex + 1
    } else {
      rightIndex = middleIndex - 1
    }
  }

  return -1
}

console.log(binarySearch([4, 5, 7, 8, 10, 15], 10))
console.log(binarySearch([4, 5, 7, 8, 10, 15], 5))
console.log(binarySearch([4, 5, 7, 8, 10, 15], 20))
