# Tower Of Hanoi

Tower of hanoi is a mathematical puzzle where we have three rods and a number of disks of various diammeters

The objective of the puzzle is to move the entire stack to the last rod, obeying the following rules:

- only one disk may be moved at a time
- Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack or on an empty rod
- No disk may be placed on top of a disk that is smaller

let's say we have three rods named A, B, and C. On rod A we have 2 disks of different sizes. Now, how do we move the rods from A to C, ensuring none of the rules are broken

- first move the smaller disk to B, then move the larger disk to C, and finally move the smaller disk to C

Technically, it is:

- shift 'n-1' disks from A to B, using C (when required)
- shift last disk from A to C
- shift 'n-1' disks from B to C, using A (when required)

Another Example
Let's say we have 3 rods A, B, and C. On rod A we have 3 disks of different sizes. How do we move the rods from A to C, ensuring none of the rules are broken
