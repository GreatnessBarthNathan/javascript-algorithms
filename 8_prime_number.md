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

console.log(isPrime(4)) --> false

console.log(isPrime(5)) --> true

console.log(isPrime(4)) --> false

### The big-O of our algorithm

The Big-O for our solution is n + 2 which is approximately n

Big-O = O(n) --- Linear time complexity

## Optimized Primality Test

The above solution is a good first solution. But there is a slightly more optimal solution:

Integers larger than the square root do not need to be checked because, whenever "n = a \* b", one of the two factors "a" and "b" is less than or equal to the square root of "n"

Example 1

n = 24, a = 4, and b = 6

The square root of 24 is 4.89

4 is less than 4.89

"a" is less than the square root on n

Example 2

n = 35, a = 5, and b = 7

The square root of 35 is 5.91

5 is less than 5.91

"a" is less than the square root of n

Example 3

n = 25, a = 5, and b = 5

The square root of 25 is 5

"a" is equal to the square root of n

So, if a number is not prime(i.e a composite number), you will find a divisor that is less than or equal to the square root of that number

```
function isPrime (n) {
    if(n < 2) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
    if(n % i === 0) {
        return false
    }
   }
   return true
}
```

### The big-O of our algorithm

If n = 100, the for loop will only check till number 10 because the square root of 100 is 10

If n = 10,000, the for loop will only check till number 10 because the square root of 100 is 100

So as the size of n increases the number of times the for loop statement executes increases, but not in thesame proportion

This time complexity is O(sqrt(n))

Big-O = O(sqrt(n))
