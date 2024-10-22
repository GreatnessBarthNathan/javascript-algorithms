# Recursion

Recursion is a problem solving technique where the solution depends on solutions to smaller instances of the same problem

If we are to get technical we can say Recursion is when a function calls itself

## Why Recursion?

- It is a great technique to simplify your solution
- If you find yourself breaking down your problem into smaller versions of the same problem, recursion is very useful

### Analogy

Lets say there is a college in your neighbourhood, and you go to the principal and ask how many students are there in the college

The pricipal replied : the total number of students is eqaul to the sum of total number of students under "Professor A - who is the head of Science" and total number of students under "Professor B - who is the head of Commerce"

When the two professors were asked thesame questions they replied:

- "Professor A" said the total number of students under Science is the sum of the students under "Teacher A" and "Teacher B"
- "Professor B" said the total number of students under Commerce is the sum of the students under "Teacher C" and "Teacher D"

The teachers count the students and report the number to the professors who in turn report to the principal, who then gives you the count

The problem has always been "find the number of students". But in each level the problem is smaller

```
                                            Principal(200)
                                                |
                    Professor A(100) ----------------------- Professor B(100)
                         |                                            |
        Teacher A(50) -------- Teacher B(50)        Teacher C(45) -------- Teacher D(55)


```

## A Few Points about Recursion

Before we dive into solving the fibonacci and factorial problems with recursion, here are a few points to take note of:

- Every recursive solution needs to have a base case - a condition to terminate the recursion. If you don't have a base case, you will have an infinite loop that will crash your program

- Recursion might simplify solving a problem but it does not always translate to a faster solution. A recursive solution may be far worse compared to an iterative solution

- Recursion is a topic that is not the most straight forward to understand. Do not give up if you struggle with the concept
