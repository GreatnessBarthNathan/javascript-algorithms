# Recursive Fibonacci Sequence

## Problem

Given a number "n", find the nth element of the Fibonacci sequence

## Solution

In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones

The first two numbers in the sequence are 0 and 1 ...(0, 1, 1, 2, 3, 5, 8...)

The element at index '0' in a fibonacci sequence is 0

The element at index '1' in a fibonacci sequence is 1

The element at index '6' in a fibonacci sequence is 8

### Tips for recursive solutions

- Figure out how to break down the problem into smaller versions of the same problem
- Identify the base case for recursion

### Now Let's Solve The Problem

- We know that the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones

- If F represents a function to calculate the Fibonacci number, then "F(n) = F(n - 1) + F(n - 2)"

- Since we already know that the element at index 0 is 0 and the element at index 1 is 1, Our base case is "F(0) = 0 and F(1) = 1

F(2) = F(1) + F(0)

F(2) = 1 + 0 = 1

```
function recursiveFibonacci(n) {
    if(n < 2) {
        return n
    }
   return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}
```

console.log(recursiveFibonacci(0)) --> 0

console.log(recursiveFibonacci(1)) --> 1

console.log(recursiveFibonacci(3)) --> 2

console.log(recursiveFibonacci(6)) --> 8

### The big-O of our algorithm

The time complexity for recursive fibonacci is 2^n

So recursion is not a good solution to the fibonacci sequence problem

```

function iterativeFibonacci(n) {
    let fib = [0, 1]

     if(n < 1) {
        return n
     }

    for (let i = 2; i < n; i++) {
       fib[i] = fib[i - 1] + fib[i - 2]
    }

    return fib[n]
}
```
