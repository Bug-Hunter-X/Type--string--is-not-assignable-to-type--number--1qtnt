# Type 'string' is not assignable to type 'number'

This TypeScript bug demonstrates a common type error: assigning a string value to a variable with a number type.  The code includes functions for addition and subtraction, but the error arises when attempting to use the results of these functions in a way that violates the type system.

## How to Reproduce

1.  Clone this repository.
2.  Open `bug.ts`.
3.  Attempt to compile the code using the TypeScript compiler (`tsc`).

You will receive a compiler error indicating the type mismatch.

## Solution

The provided solution corrects this type mismatch by explicitly handling potential string inputs.