# Recursive Binary Search

## Problem

Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found

## Solution

If we have array:

arr = [-5, 2, 4, 6, 10], t = 10 --> should return 4

arr = [-5, 2, 4, 6, 10], t = 6 --> should return 3

arr = [-5, 2, 4, 6, 10], t = 20 --> should return -1

```
function recursiveBinarySearch (arr, t) {
     return search(arr, t, 0, arr.length - 1)
}

```

```
function search (arr, t, leftIndex, rightIndex) {
    if(leftIndex > rightIndex) {
        return -1
    }

    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    if(arr[middleIndex] === t) {
        return middleIndex
    }

    if(arr[middleIndex] < t) {
        return search(arr, t, middleIndex + 1, rightIndex)
    } else {
        return search(arr, t, leftIndex, middleIndex - 1)
    }
}


console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)) --> 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)) --> 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)) --> -1
```
