# Factorial of a number

## Problem

Given an integer 'n', find the factorial of that integer

## What is the Factorial of an Integer

In mathematics, the factorial of a non-negative integer "n", denoted n!, is the product of all positive integers less than or equal to "n"

The factorial of "0" is "1" and the factorial of "1" is "1" as well

### Example

factorial of 4 = 4x3x2x1 = 24

factorial of 5 = 5x4x3x2x1 = 120

## Solution

knowing that the factorial of "0" and "1" is 1, the for loop should start from number 2

```
function factorial(n) {
    let result = 1
    for (let i = 2; i <= n; i++) {
        result = result * i
    }
    return result
}
```

console.log(factorial(0)) ---> 1

console.log(factorial(1)) ---> 1

console.log(factorial(5)) ---> 120

### The big-O of our algorithm

The Big-O for our solution is n + 2 which is approximately n

Big-O = O(n) --- Linear time complexity
