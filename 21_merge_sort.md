# Merge Sort

## Problem

Given an array of integers, sort the array

For Example

If you hav an array of integers: const arr = [-6, 20, 8, -2, 4]

Passing the array into a merge sort function should return [-6, -2, 4, 8, 20]

## The Idea Behind Merge Sort

- Divide the array into sub arrays, each containing only one element (An array with one element is considered sorted)

- Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array

Consider the array: [-6, 20, 8, -2, 4]

1. Split the array at the middle till you have an array of lenght 1

   [-6, 20] [8, -2, 4]

   [-6] [20] [8, -2, 4]

   [-6] [20] [8] [-2, 4]

   [-6] [20] [8] [-2] [4]

2. Merge the individual sub arrays into new sub arrays by ensuring the elements are sorted

- [-6] [20] [8] [-2] [4] ... [-6] is the left array and [20] is the right array

compare the first elements of the left and right arrays -6 and 20 and put the lesser one in the temp array

[] [20] [8] [-2] [4]

[-6]

Since the left array is empty we simply push all the elements in the right array into to temp array

[] [] [8] [-2] [4]

[-6, 20]

- we now have [-6, 20] [8] [-2] [4] ... ... [-2] is the left array and [4] is the right array

compare the first elements of the left and right arrays -6 and 20 and put the lesser one in the temp array

[-6, 20] [8] [] [4]

[-2]

Since the left array is empty we simply push all the elements in the right array into to temp array

[-6, 20] [8] [] []

[-2, 4]

- we now have [-6, 20] [8] [-2, 4] ... [8] is left array and [-2, 4] is the right array

ompare the first elements of the left and right arrays 8 and -2 and put the lesser one in the temp array

[-6, 20] [8] [4]

[-2]

compare the first and elements of the left and right arrays again 8 and 4 and push the lesser one to the temp array

[-6, 20] [8] []

[-2, 4]

since the right array is empty we push the elements in the left array into the temp array

[-6, 20] [] []

[-2, 4, 8]

- we now have [-6, 20] [-2, 4, 8] ... [-6, 20] is left array and [-2, 4, 8] is the right array

compare the first and elements of the left and right arrays -6 and -2 and push the lesser one to the temp array

[20] [-2, 4, 8]

[-6]

compare the first and elements of the left and right arrays again 20 and -2 and push the lesser one to the temp array

[20] [4, 8]

[-6, -2]

compare the first and elements of the left and right arrays again 20 and 4 and push the lesser one to the temp array

[20] [8]

[-6, -2, 4]

compare the first and elements of the left and right arrays again 20 and 4 and push the lesser one to the temp array

[20] []

[-6, -2, 4, 8]

since the right array is empty we push the elements in the left array into the temp array

[] []

[-6, -2, 4, 8, 20] --> sorted array

## Solution

```
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

console.log(mergeSort(array)) --> [-5, 2, 3, 4, 7, 8, 11]


```

### The Big-O of our algorithm

- We recursively divide the problems into halves - O(logn)
- Then we merge with a while loop - O(n)

So our solution is a combination of the two

Big-O = O(nlogn)

And this is one of the best time complexity to get while sorting
