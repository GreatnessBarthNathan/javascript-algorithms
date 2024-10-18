# ALGORITHM ANALYSIS

There are multiple ways to solve one problem
Example: There are multiple algorithms to sort a list of numbers

How do we analyse which one of them is the most efficient algorithm?

Generally, when we talk about performance, we use an absolute measure
Example: If I can run 100 meters in 12 seconds, I'm faster than someone who takes 15 seconds

But analysing algorithms(the absolute running time of an algorithm) however, cannot be predicted since it depends on a number of factors. It can change based on:

1. The programming language used to implement the algorithm
2. The computer the program runs on
3. Other programs running at the same time
4. The Quality of the operating system
5. Many other factors

Keeping this in mind we evaluate the performance of an algorithm in terms of its input size.

## Types of Evaluation

1. Time Complexity - Amount of time taken by an algorithm to run, as a function of input size

2. Space Complexity - Amount of memory takenn by an algorithm to run, as a function of input size

By evaluating against the input size, the analysis is not only machine independent but the comparison is also more appropriate. Imagine if one algorithm is faster for a small input size but slower for a larger input size.

There is no one solution that works every single time. It is always good to know multiple ways to solve the problem and use the best solution, given your constraints

If your app needs to be very quick and has plenty of memory to work with, you don't have to worry about space complexity

If you have very little memory to work with, you should pick a solution that is relatively slower but needs less space

## How To Represent Time And Space Complexity Of An Algorithm

We represent the time and space complexity of an algorithm using "Asymptotic Notations"

Asymptotic Notations are mathematical tools to represent time and space complexity

## Types of Asymptotic Notations

1. Big-O Notation (O-notation) - For Worst case complexity
2. Omega Notation (Ω-notation) - For Best case complexity
3. Theta Notation (Θ-notation) - For Average case complexity

We are primarily concerned with the worst case scenario of an algorithm as we deal with problems.
