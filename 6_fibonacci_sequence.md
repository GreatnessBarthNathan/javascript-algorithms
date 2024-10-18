# Fibonacci Sequence

## Problem

Given a number 'n', find the first 'n' elements of the Fibonacci sequence

## What is Fibonacci sequence

In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the two preceding ones

The first two numbers in the sequence are 0 and 1

For example:

- Fibonacci(2) = [0,1]
- Fibonacci(3) = [0,1,1]
- Fibonacci(7) = [0,1,1,2,3,5,8]

## Solution

```
function fibonacci (n) {
    const fib = [0, 1]
    for(i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}
```

console.log(fibonacci(2)) ---> [0, 1] will return back the array because 'i' is not less than 'n'

console.log(fibonacci(3)) ---> [0, 1, 1]

console.log(fibonacci(5)) ---> [0, 1, 1, 2, 3]

console.log(fibonacci(7)) ---> [0, 1, 1, 2, 3, 5, 8]

### The big-O of our algorithm

The Big-O for our solution is n + 2

Big-O = O(n) --- Linear time complexity
