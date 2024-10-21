# Power Of Two

## Problem

Given a positive integer "n", determine if the number is a power of 2 or not

## When is an integer a power of two?

An integer is a power of two if there exists an integer "x" such that "n" === 2^x

Example:

"1" is a power of two because "2^0 = 1"

"2" is a power of two beacause "2^1 = 2"

"4" is a power of two because "2^2 = 4"

"5" is not a power of two because there is no integer "2" can be raised to to give "5"

## Solution 1

### Pseudocode

Lets take the number "8" as an example

We will repeatedly divide 8 by 2

8/2 = 4 (remainder 0)

4/2 = 2 (remainder 0)

2/2 = 1 (remainder 0)

At each step we check if the remainder is "0". If the remainder is not "O" we can return false simply because it is not a power of two

If we continue and the end result comes down to "1", the number is a power of two

```
function isPowerOfTwo (n) {
  if(n < 1) {
    return false
  }

  while(n > 1) {
    if(n % 2 !== 0) {
        return false
    }
    n = n / 2
  }

  return true
}

```

console.log(isPowerOfTwo(1)) --> true

console.log(isPowerOfTwo(2)) --> true

console.log(isPowerOfTwo(5)) --> true

### The big-O of our algorithm

Although this is a while loop, but with each iteration we reduce the value of n by half.

Therefore the time complexity of this algorithm is Logarithmic

Big-O = O(logn)

## Solution 2

This solution involves the use of Bitwise operations

```

function isPowerOfTwoBitwise (n) {
    if(n < 1) {
        return false
    }

    return (n & (n - 1)) === 0
}
```

console.log(isPowerOfTwoBitwise(1)) --> true

console.log(isPowerOfTwoBitwise(2)) --> true

console.log(isPowerOfTwoBitwise(5)) --> false

### The big-O of our algorithm

The time complexity of this solution is "constant"

Big-O = O(1)
