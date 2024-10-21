# Prime Number

## Problem

Given a natural number "n", determine if the number is prime or not

## What is a prime number?

A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers

## Solution

```
function isPrime (n) {
    if(n < 2) {
        return false
    }

    for (let i = 2; i < n; i++) {
    if(n % i === 0) {
        return false
    }
   }
   return true
}
```
