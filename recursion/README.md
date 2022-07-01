## What is the Fibonacci Sequence

The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
Where the next number is found by adding up the two numbers before it

## How the function works?

The easiest way to approach is understanding that the sequence is nothing more than an infinite
array [0, 1, 1, 2, 3, 5, 8, 13, 21, 34...]

When we call the function in a given number let's say 5, we want to know what's the value of the array in the index 5

fib(5)

Our function will check first if the number is bigger or smaller than 1 or 0, which will return the default 1 or 0.

Then if is bigger than 3 will go to our recursion where we recall the function using
fib(n - 1) + fib(n - 2), this will bring the value of the index 4 and sum with the value of the index 3.

It will happen exactly like is in the array

index 4 value 2
index 3 value 1

index 5 value 2+1 = 3
