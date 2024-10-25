# Quick Sort

Sorting can either be ascending or descending

For Example

If you hav an array of integers: const arr = [-6, 20, 8, -2, 4]

Passing the array into a quick sort function should return [-6, -2, 4, 8, 20]

## The Idea Behind Quick Sort

- You begin by identifying the pivot element in the array

  1. Pick the first element as pivot
  2. Pick the last element as pivot (our approach)
  3. Pick a random element as pivot
  4. Pick median as pivot

- Put everything that's smaller than the pivot into a 'left' array and everything that's greater than the pivot into a 'right' array

- Repeat the process for the individual 'left' and 'right' arrays till you have an array of length 1 which is sorted by definition

- Repeatedly concatenate the left array, pivot and right array till one sorted array remains

Consider the array: [-6, 20, 8, -2, 4]

Identify the pivot - our pivot here is '4' which is the last element

left array --> [-6, -2]

right array --> [8, 20]

pivot array --> [4]

Then concatenate all the arrays

[-6, -2] + [4] + [8, 20] --> [-6, -2, 4, 8, 20]

## Problem

Given an array of integers, sort the array

## Solution

```
function quickSort(arr) {
  if (arr.length < 2) {
    return arr
  }

  let left = []
  let right = []
  let pivot = arr[arr.length - 1]

  for (let count = 0; count < arr.length - 1; count++) {
    if (arr[count] < pivot) {
      left.push(arr[count])
    } else {
      right.push(arr[count])
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}

let array = [-6, 20, 8, -2, 4]
console.log(quickSort(array)) --> [ -6, -2, 4, 8, 20 ]

```

```
function descendingQuickSort(arr) {
  if (arr.length < 2) {
    return arr
  }
  let left = []
  let right = []
  let pivot = arr[arr.length - 1]

  for (let count = 0; count < arr.length - 1; count++) {
    if (arr[count] < pivot) {
      right.push(arr[count])
    } else {
      left.push(arr[count])
    }
  }

  return [...descendingQuickSort(left), pivot, ...descendingQuickSort(right)]
}

let array = [-6, 20, 8, -2, 4]
console.log(descendingQuickSort(array))

```

### The Big-O of our algorithm

#### The worst case complexity

Big-O = O(n^2) - This happens when the array has already been sorted. Instead of partitioning our array into smaller arrays, we end up partitioning into an empty array and a full array. You end up comparing with every other element, and that will be quadratic time complexity

#### The average case complexity

Big-O = O(nlogn)

We have a for loop --> n

Then we recursively decrease the input by half with each iteration --> logn
