# Bubble Sort

Sorting can either be ascending or descending

For Example

If you hav an array of integers: const arr = [-6, 20, 8, -2, 4]

Passing the array into a bubble sort function should return [-6, -2, 4, 8, 20]

Note=> Bubble sort is a poor sorting algorithm in real world, and is primarily used as a good introduction to sorthing algorithms

You may never use this apart from interviews and as a stepping stone to other algorithms

## The Idea Behind Bubble Sort

- With bubble sort you compare adjacent elements in the array and swap the positions if they are not in the intended order

- Repeat the instruction as you step through each element in the array

- Once you step through the whole array with no swaps, the array is sorted

Let's consider the same array above [-6 20 8 -2 4]

First check if '-6' and '20' are in order. Since '-6' is less than '20' then they are in order --- [-6, 20, 8, -2, 4]

Next check if '20' and '8' are in order. They are not, because '8' is less than '20'. Swap '20' and '8' --- [-6, 8, 20, -2, 4]

Next check if '20' and '-2' are in order. They are not, because '-2' is less than '20'. Swap '20' and '-2' --- [-6, 8, -2, 20, 4]

Next check if '20' and '4' are in order. They are not, because '4' is less than '20'. Swap '20' and '4' --- [-6, 8, -2, 4, 20]

We have now reached the end of the array. At this point we check if the elements have been properly swapped. If the have, repeat the comparison from the start again

Start with '-6' and '8'. They are in order --- [-6, 8, -2, 4, 20]

Check '8' and '-2'. Swap '8' and '-2' --- [-6, -2, 8, 4, 20]

Check '8' and '4'. Swap '8' and '4' --- [-6, -2, 4, 8, 20]

Check '8' and '20'. They are in order --- [-6, -2, 4, 8, 20]

We have now reached the end of the array. At this point we check if the elements have been properly swapped. If the have, repeat the comparison from the start again

Check '-6' and '-2'. They are in order

Check '-2' and '4'. They are in order

Check '4' and '8'. They are in order

Check '8' and '10 '. They are in order

We have reached the end of the array, and no elements have been swapped. The array is sorted

This is how bubble sort works. In each loop the highest number is bubbled to the top. Hence the name bubble sort

## Problem

Given an array of integers, sort the array

## Solution

```
function bubbleSort(arr) {
  let swapped
  do {
    swapped = false
    for (let count = 0; count < arr.length - 1; count++) {
      if (arr[count] > arr[count + 1]) {
        let temp = arr[count]
        arr[count] = arr[count + 1]
        arr[count + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

console.log(bubbleSort([-6, 8, -2, 4, 20])) --> [ -6, -2, 4, 8, 20 ]
console.log(bubbleSort([4, 8, 9, 2, 15])) --> [ 2, 4, 8, 9, 15 ]
console.log(bubbleSort([-1, -9, 8, 2, 1, 5])) --> [ -9, -1, 1, 2, 5, 8 ]


function bubbleSortDescending(arr) {
  let swapped
  do {
    swapped = false
    for (let count = 0; count < arr.length; count++) {
      if (arr[count] < arr[count + 1]) {
        let temp = arr[count]
        arr[count] = arr[count + 1]
        arr[count + 1] = temp
        swapped = true
      }
    }
  } while (swapped)
  return arr
}

console.log(bubbleSortDescending([-6, 8, -2, 4, 20]))
console.log(bubbleSortDescending([4, 8, 9, 2, 15]))
console.log(bubbleSortDescending([-1, -9, 8, 2, 1, 5]))
```

### The Big-O of our algorithm

Our algorithm contains two loops: a for loop nested inside a do while loop. The time complexity of our solution is 'Quadratic'

Big-O = O(n^2)
