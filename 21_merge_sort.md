# Merge Sort

## Problem

Given an array of integers, sort the array

For Example

If you hav an array of integers: const arr = [-6, 20, 8, -2, 4]

Passing the array into a merge sort function should return [-6, -2, 4, 8, 20]

## The Idea Behind Quick Sort

- Divide the array into sub arrays, each containing only one element (An array with one element is considered sorted)

- Repeatedly merge the sub arrays to produce new sorted sub arrays until there is only one sub array remaining. That will be the sorted array

Consider the array: [-6, 20, 8, -2, 4]

1. Split the array at the middle till you have an array of lenght 1

   [-6, 20] [8, -2, 4]

   [-6] [20] [8, -2, 4]

   [-6] [20] [8] [-2, 4]

   [-6] [20] [8] [-2] [4]

2. Merge the individual sub arrays into new sub arrays by ensuring the elements are sorted
