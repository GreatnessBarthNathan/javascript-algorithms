# Insertion Sort

Sorting can either be ascending or descending

For Example

If you hav an array of integers: const arr = [-6, 20, 8, -2, 4]

Passing the array into a bubble sort function should return [-6, -2, 4, 8, 20]

## The Idea Behind Insertion Sort

- With insertion sort you virtually split the array into a sorted and unsorted part

- Since one item by definition is always sorted we assume that the first element is already sorted and the remaining elements are unsorted

- We then select an unsorted element and compare with all elements in the sorted part

- If the elements in the sorted part is smaller than the selected element, proceed to the next element in the unsorted part. Else, shift larger elements in the sorted part towards the right

- Then insert the selected element at the right index, ensuring the sorted part remains that way

- Repeart this step till all the unsorted elements are placed in the right order

Let's consider the same array above : [-6, 20, 8, -2, 4]

- We begin by assuming the first element in the array is already sorted

original array --- [-6, 20, 8, -2, 4]

sorted --- [-6], unsorted --- [20, 8, -2, 4]

1. We compare '20' with the elements in the sorted array, i.e '-6' to see if it is out of order. Since '20' is greater than '-6' we place '20' to the right of '-6'

sorted --- [-6, 20], unsorted --- [8, -2, 4]

2. Next we compare '8' with the elements in the sorted array, i.e '-6, 20'. We start with '20'. Since '20' is greater than '8' we move '20' to the right. Then we compare '8' with '-6' and since '8' is already greater than '-6' it remains on the right of '-6'

sorted --- [-6, 8, 20], unsorted --- [-2, 4]

3. Next we compare '-2' with the elements in the sorted array, i.e '-6, 8, 20'. We start with '20'. Since '20' is greater than '-2' we move '20' to the right. Then we compare '-2' with '8' and since '8' is greater than '-2' we move '8' to the right of '2'. Then we compare '-2' with '-6' and since '-2' is greater than '-6' it remains on the right of '-6'

sorted --- [-6, -2, 8, 20], unsorted --- [4]

2. Next we compare '4' with the elements in the sorted array, i.e '-6, -2, 8, 20'. We start with '20'. Since '20' is greater than '4' we move '20' to the right. Then we compare '4' with '8' and since '8' is greater than '4' we move '8' to the right of '4'. Then we compare '4' with '-2' and since '4' is greater than '-2' it remains on the right of '-2'

sorted --- [-6, -2, 4, 8, 20], unsorted --- []

## Problem

Given an array of integers, sort the array

## Solution

```
let array = [4, 20, 2, 6, 5]

function insertionSort(arr) {
  for (let count = 1; count < arr.length; count++) {
    let numberToInsert = arr[count]
    let leftNumberIndex = count - 1
    while (leftNumberIndex >= 0 && arr[leftNumberIndex] > numberToInsert) {
      arr[leftNumberIndex + 1] = arr[leftNumberIndex]
      leftNumberIndex--
    }
    arr[leftNumberIndex + 1] = numberToInsert
  }
  return arr
}

console.log(insertionSort(array)) --> [ 2, 4, 5, 6, 20 ]
```

### Explanation

line 5 - meaning we changed the number to insert with the item on its left because the item on the left is greater

line 6 - if the index was 0 it will now be -1

```
let array = [4, 20, 2, 6, 5]

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
```

### The Big-O of our algorithm

Big-O = O(n^2)
