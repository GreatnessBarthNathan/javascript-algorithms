# Cartesian Product

In mathematics, specifically set theory, the Cartesian product of two sets A and B, denoted AxB, is the set of all ordered pairs (a, b) where a is in A and b is in B

We will be representing a set as an array in JavaScript

Example 1

const A = [1, 2]

const B = [3, 4]

the cartesian product of A and B is [[1, 3], [1, 4], [2, 3], [2, 4]]

Example 2

const C = [1, 2]

const D = [3, 4, 5]

the caresian product of C and D is [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]]

## Problem

Given two finite non-empty sets, find their Cartesian Product

## Solution

```
function cartesianProduct(arrA, arrB) {
  let newArray = []

  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      newArray.push([arrA[i], arrB[j]])
    }
  }

  return newArray
}
const C = [1, 2]

const D = [3, 4, 5]

console.log(cartesianProduct(C, D)) --> [ [ 1, 3 ], [ 1, 4 ], [ 1, 5 ], [ 2, 3 ], [ 2, 4 ], [ 2, 5 ] ]

```
