// const message: string = "Hello, Typescript!";
console.log(message);

let count: number = 10;
let message2: string = "Hello";
let isActive: boolean = true;
let numbers: number[] = [1, 2, 3];
let person3: object = { name: "Alice", age: 25 };
let nullableValue: null = null;
let undefinedValue: undefined = undefined;

//storing a person's age
let storedAge: number = 26;
//storing product price
let productPrice: number = 13.99;
//storing a list of book titles
let bookTitles: string[] = ['Harry Potter', 'Crepusculo'];
//storing a user's auth status
let isLogged: boolean = false;
//storing a user's profile
let userInfo: object = {name: "Atza", age: 26, email: "atza@atza.com"};
//storing value abscence of a selected option
let selectedOption: null = null;
// storing a value that has not been assigned
let unassignedValue: undefined = undefined;

// Type inference
let age = 25;
let name2 = "Alice";

// Type keyword

/**
 * Type aliases allow you to create a new name for an existing type. 
 * This can be useful when you want to simplify complex type annotations or when you want to create a reusable type definition.
 */
type MyString = string;
type Point = {x: number; y: number};

// Union type
/**  
 *Union types allow you to define a type that can be one of several possible types. It is denoted by using the “|” symbol between the type options.
 */
 type MyType = string | number;
 type Result = Success | Error; 

/**
 * Intersection Types:
Intersection types allow you to combine multiple types into a single type. It is denoted by using the “&” symbol between the type options.
 */

type Person1 = { name: string } & { age: number };

/**
 * Mapped Types:
Mapped types enable you to transform the properties of an existing type into a new type. This can be useful for creating modified versions of existing types.
 */
type ReadonlyPoint = Readonly<Point>;
type OptionalPerson = Partial<Person1>;

// Check of understanding
// Custom type for user's ID
type UserId = number;
// Defining union type for variable that can store a string or array of numbers
type UnionType = string | number[];
// Intersection type for combining a persons name and their address
type PersonInfo = {name: string} & {street: string, zipcode: number, country: string};
// Mapped type for read-only version of existing type
type ReadonlyPersonInfo = Readonly<PersonInfo>;
// Type alias for a function that takes a string argument and returns a number
type MyFunc = (arg: string) => number;