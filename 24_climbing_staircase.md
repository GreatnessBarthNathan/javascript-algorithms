# Climbing Staircase

## Problem

Given a staircase of 'n' steps, count the number of distinct ways to climb to the top. You can either climb 1 step or 2 steps at a time

Example

If you have 1 step there is only one way too climb it --> (1)

If there are 2 steps there are two ways to climb it:

- (1, 1) which is one at a time
- (2) which is two at once

If there are 3 steps there are three ways to climb it:

- (1, 1, 1) which is one at a time
- (1, 2) which is one step and then two steps
- (2, 1) which is two steps and then one step

if there are 4 steps there are 5 ways to climb it:

- (1, 1, 1, 1) which is one at a time
- (1, 1, 2) which is one step for the first two then two steps at once
- (1, 2, 1) which is one step at the start and end and two steps in the middle
- (2, 1, 1) which is two steps to start and then one at a time
- (2, 2) which is two steps at a time

We see a pattern here:

for 3 steps we can see it is the sum of 2 steps and 1 step

climbingStaircase(3) = climbingStaircase(3-1) + climbingStaircase(3-2)

climbingStaircase(3) = climbingStaircase(2) + climbingStaircase(1)

climbingStaircase(3) = 2 + 1 = 3

for 4 steps we can see it is the sum of 3 steps and 2 steps

climbingStaircase(4) = climbingStaircase(4-1) + climbingStaircase(4-2)

climbingStaircase(4) = climbingStaircase(3) + climbingStaircase(2)

climbingStaircase(4) = 3 + 2 = 5

## Solution 1

```
function climbingStaircase(n) {
  if (n < 1) {
    return 0
  }
  if (n === 1) {
    return 1
  }
  if (n === 2) {
    return 2
  }
  return climbingStaircase(n - 1) + climbingStaircase(n - 2)
}

console.log(climbingStaircase(1)) --> 1
console.log(climbingStaircase(2)) --> 2
console.log(climbingStaircase(3)) --> 3
console.log(climbingStaircase(4)) --> 5
console.log(climbingStaircase(5)) --> 8

```

## Solution 2

```
function climbingStaircase(n) {
  const noOfWays = [1, 2]

  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2]
  }

  return noOfWays[n - 1]
}

console.log(climbingStaircase(1)) --> 1
console.log(climbingStaircase(2)) --> 2
console.log(climbingStaircase(3)) --> 3
console.log(climbingStaircase(4)) --> 5
console.log(climbingStaircase(5)) --> 8

```

### The big-O of our algorithm

solution 1 -- Big-O = O(n^2)

solution 2 -- Big-O = O(n)
