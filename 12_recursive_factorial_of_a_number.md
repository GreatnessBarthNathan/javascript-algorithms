# Recursive Factorial Of A Number

## Problem

Given an integer 'n', find the factorial of that integer

## Solution

In mathematics, the factorial of a non-negative integer "n", denoted n!, is the product of all positive integers less than or equal to "n"

The factorial of "0" is "1" and the factorial of "1" is "1" as well

```

5! = 5 * 4 * 3 * 2 * 1

4! = 4 * 3 * 2 * 1

3! = 3 * 2 * 1

2! = 2 * 1

1! = 1 * 1

0! = 1

We can see here that:

5! = 5 * 4!

4! = 4 * 3!

3! = 3 * 2!

2! = 2 * 1!

1! = 1 * 0!

```

If we generalise this we can say that "n! = n \* (n-1)!"

```
function recursiveFactorial (n) {
    if(n === 0) {
        return 1
    }

     return n * recursiveFactorial(n - 1)
}

```

console.log(recursiveFactorial(0)) --> 1

console.log(recursiveFactorial(1)) --> 1

console.log(recursiveFactorial(4)) --> 24

console.log(recursiveFactorial(5)) --> 120

### The big-O of our algorithm

Going by our solution, if n is 5 the function will be executed 5 times

Therefore the time complexity of our algorithm is "linear"

Big-O = O(n)
