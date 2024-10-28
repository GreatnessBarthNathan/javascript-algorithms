function mergeSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let mid = Math.floor(arr.length / 2)
  let leftArray = arr.slice(0, mid)
  let rightArray = arr.slice(mid)

  return merge(mergeSort(leftArray), mergeSort(rightArray))
}

function merge(leftArray, rightArray) {
  let tempArray = []

  while (leftArray.length > 0 && rightArray.length > 0) {
    if (leftArray[0] <= rightArray[0]) {
      tempArray.push(leftArray.shift())
    } else {
      tempArray.push(rightArray.shift())
    }
  }

  return [...tempArray, ...leftArray, ...rightArray]
}
const array = [2, 4, 3, 8, 7, -5, 11]

console.log(mergeSort(array))
