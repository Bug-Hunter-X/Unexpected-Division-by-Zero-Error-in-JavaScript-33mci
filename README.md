# Unexpected Division by Zero in JavaScript

This repository demonstrates a common yet easily overlooked error in JavaScript: silent failure due to division by zero. The `foo` function showcases this. While a simple `if` condition checks for zero inputs, it doesn't prevent the division operation from executing if `b` happens to be `0`.  This results in an error.

The `bugSolution.js` file provides a more robust solution to handle such cases.

## How to Reproduce

1. Clone this repository.
2. Open `bug.js` and run it using Node.js or in your browser's console.
3. Observe the error thrown.

## Solution

The solution involves adding stricter type checking or using a `try...catch` block to handle potential `Error` exceptions.  Refer to `bugSolution.js` for an improved implementation.