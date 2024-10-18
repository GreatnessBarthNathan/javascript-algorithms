## Big-O Notation

The worst case complexity of an algorithm is represented using the Big-O notation.

Big-O notation describes the complexity of an algorithm using algebraic terms

# Characteristics of Big-O Notation

1. It is expressed in terms of the input
2. It focuses on the bigger picture without getting caught up in the minute details

## Big-O Time complexity

1. Find the sum of the first "n" natural numbers

# Algorithm 1

```
function summation(n) {
let sum = 0
for (let i = 1; i <= n; i++) {
sum += i
}
return sum
}
```

Example
summation(4) = 10
1 + 2 + 3 + 4 = 10

We already know that we cannot calculate the absolute running time of an algorithm, and hence that cannot be the time complexity

What we do instead is count the number of times a statement executes based on the input size

Our program has three main statements to execute:
line 2 --- let sum = 0
line 4 --- sum += i
line 6 --- return sum

The for loop is just a repetition of line 4

Now, given that n = 4, let's calculate the number of times each statement is executed

line 2 executes only once
line 4 however executes four times i = 1 -> 1 = 4
line 6 executes only once

total count = 6
i.e if n = 4
total count = n + 2 = 4 + 2 = 6

if n = 10
total count = 10 + 2 = 12

if n = 1,000,000
total count = 1,000,000 + 2 = 1,000,002

So our time complexity is dependent on our input size. This shows the first characteristics of the Big-O Notation - "It is expressed in terms of the input"

n + 2
n = 100 -> 100 + 2
n = 1000 -> 1000 + 2
n = 10000 -> 10000 + 2
.
.
.
n = 100000000 -> 100000000 + 2

At the point of 100000000 the "+ 2" is insignificant and we can actually drop it, and "+ 2" can be approximated to just "n" since "n" contributes most to the total value and not the additional 2 or more extra steps

So you don't have to be caught up in the smaller steps that don't affect the performance as much as the others - "It focuses on the bigger picture without getting caught up in the minute details"

So the worst case time complexity which is also referred to as just "time complexity" of our summation algorithm is: O(n)

O(n) - referred to as linear time complexity which means as the size of the input increases, the time complexity also increases

# Algorithm 2

```

function summation(n) {
return (n * (n + 1)) / 2
}

```

Here is another algorithm to solve the same problem. The time complexity of this algorithm is: O(1)

O(1) - referred to as Constant time complexity. Because irrespective of what the value of "n" is, line 2 executes only once

# In The case of two nested loops

```
for (i = 1; i <= n; 1++) {
    for (j = 1; j <= i; j++) {
        // some code
    }
}
```

The time Complexity in this case is "Quadratic"
O(n^2) - Quadratic time complexity

Once again the Big-O notation drops the less dominant terms
E.g If you calculate the complexity to be "3n^2 + 5n + 1", we narrow that dowwn to just n^2 and call it quadratic

"100,000,000^2" is so large compared to "100,000,000 \* 5

# In The case of three nested loops

```
for (i = 1; i <= n; 1++) {
    for (j = 1; j <= i; j++) {
        for (k = 1; k <= j; k++) {
          // some code
        }
    }
}
```

The time Complexity in this case is "Cubic"
O(n^3) - Cubic time complexity

# In The Case Where the input size reduces by half every iteration

In this case the time complexity is "Logarithmic"
O(logn) - Logarithmic time complexity

## Big-O Space Complexity

1. If the algorithm does not need extra memory, or the memory needed does not depend on the input size the space complexity is "Constant"

O(1) - Constant space complexity

An example will be sorting algorithms, which sort within the array without using additional arrays

2. If the memory needed grows as the input size grows, the space complexity is "Linear"

O(1) - Linear space complexity

3. When the memory or extra space needed grows but not as thesame rate as the input, the space complexity is Logarithmic

O(logn) - Logarithmic space complexity

Note => Although we tried to solve "quadratic time complexity", "quadratic space complexity" is something you should try to avoid

## Few Points to note

- Multiple algorithms exist for the same problem and there is no one right solution. Different algorithms work well under different constraints

- The same algorithm with the same programming language can be implemented in different ways

- When writing programs at work, don't lose sight of the big picture. Rather than writing clever code, write code that is simple to read and maintain
