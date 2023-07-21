function add1 (a: number, b: number): number {
    return a + b;
}

function greet(): void {
    console.log("hello");
}

function sayHello(name?: string): void {
    if(name) {
        console.log(`Hello, ${name}`);
    } else {
        console.log("Hello");
    }
}

// Check for Understanding 
// What is the purpose of functions in Typescript?
// Close behaviors, or encapsulate blocks of code, for being reusable and use it on another parts instead of do redundant code
// 
// Define a function
function calculateSum1(num1: number, num2: number): number {
    return num1 + num2;
}

// Explain void return type
// Tell to the code that the function wont be return anything or any value, 

// Write a function named printName
function printName(name?: string) {
    if (name) {
        console.log(`Hello ${name}`);
    } else {
        console.log("Hello!")
    }
}

/**
 * Function types
 */
// function type with parameters and return type
type MathOperation1 = (a: number, b: number) => number;

// function type without parameters and return type
type GreetingFunction = () => void;

//Check for Understanding
// What is a function type in Typescript
// Is a representation of a function structure and behavior, including their parameters

// Define a function type called MathOperation
type MathOperation2 = (arg1: number, arg2: number) => number;

// Explain how function types can be used to enforce type safety in var declarations
// Well, we are telling to the code the structure of the function, and which kind of values we're gonna receive as parameters, so
// if for some reason, the parameters or the structure arent the correct ones, then shows an error, preventing put that errors on prod code...

// Write a function type named Greeting
type Greeting = () => void;

/**
 * Arrow Functions
 */

// Arrow function with params
const multiply1 = (a: number, b: number): number => a * b;

// Arrow function without parameters
const sayHi = (): void => console.log("Hello");

// Check for understandings
// What are arrow functions in Typescript
// Are a different kind of functions or another kind of function declaration, where the "this" context changes to the page, instead of the functions itself

// Rewrite add function
const add2 = (a: number, b: number): number => a + b;

// Advantages of arrow functions
// The "this" context is the page itself instead of the function. With this, we can avoid some behaviors like bind functions 

// Write arrow function named multiply
const multiply2 = (num1: number, num2: number): number => num1 * num2;