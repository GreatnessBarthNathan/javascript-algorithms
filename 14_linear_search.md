# Linear Search

## Problem

Given an array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found

## Solution

If we have array:

arr = [-5, 2, 10, 4, 6], t = 10 --> should return 2

arr = [-5, 2, 10, 4, 6], t = 6 --> should return 4

arr = [-5, 2, 10, 4, 6], t = 20 --> should return -1

```
function linearSearch(arr, t) {
  let result = -1
  for (let count = 0; count < arr.length; count++) {
    if (arr[count] === t) {
      result = count
    }
  }
  return result
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10)) --> 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)) --> 4
console.log(linearSearch([-5, 2, 10, 4, 6], 20)) --> -1

```

### The big-O of our algorithm

Big-O = O(n)
