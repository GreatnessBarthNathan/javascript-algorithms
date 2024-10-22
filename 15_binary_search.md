# Binary Search

Note=> Binary search only works on a sorted array

If you do not have a sorted array you can choose between linear search or sort the array first and then apply binary search

## Problem

Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found

## Solution

If we have array:

arr = [-5, 2, 4, 6, 10], t = 10 --> should return 4

arr = [-5, 2, 4, 6, 10], t = 6 --> should return 3

arr = [-5, 2, 4, 6, 10], t = 20 --> should return -1

### Binary Search Pseudocode

If the array is empty, return -1 as the element cannot be found

If the array has elements, find the middle element in the array. If target is equal to the middle element, return the middle element index

If target is less than the middle element, binary search left half of the array

If target is greater than the middle element, binary search right half of the array

If there are two items in the array, the first item is the middle item

```
function binarySearch (arr, t) {
   let leftIndex = 0
   let rightIndex = arr.length - 1

   while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if(arr[middleIndex] === t) {
        return middleIndex
    }

    if(arr[middleIndex] < t) {
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
```

### The big-O of our algorithm

Our function contains one while loop but in every iteration we reduce the input size by half. So the time complexity of our function is "Logarithmic"

Big-O = O(logn)
