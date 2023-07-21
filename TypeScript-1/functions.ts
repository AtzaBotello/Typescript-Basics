function calculateSum (num1: number, num2: number): number {
    return num1 + num2;
}

console.log(calculateSum(1, 3));
console.log(calculateSum(100, 350));
console.log(calculateSum(124, 3453));
console.log(calculateSum(999, 31));
console.log(calculateSum(123, 987));

function isEven(num: number): boolean {
    if (num % 2 !== 0) {
        return false;
    } else {
        return true;
    }
}

console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(33));
console.log(isEven(98));

function reverseString(str: string): string {
    let reversedString = '';
    let splittedString = str.split("");
    for (let index = splittedString.length - 1; index >= 0; index--) {
        reversedString += splittedString[index];
    }
    return reversedString;
}

console.log( reverseString("Hello") );
console.log( reverseString("Atzayacatl") );
console.log( reverseString("How are you") );
console.log( reverseString("Reconocer") );

const calculateAverage = (arr: number[]) => {
    const sumNumbers = arr.reduce((prev: number, curr: number) => prev + curr) / arr.length;
    return sumNumbers;
}

console.log(calculateAverage([5,5,5,5,5]));
console.log(calculateAverage([1,2,3,4,5]));
console.log(calculateAverage([250,534,5,10,6]));
console.log(calculateAverage([5,5,150,5,6]));

type MathOperation = (num1: number, num2: number) => number;

const multiply: MathOperation = (number1: number, number2: number) => number1 * number2;

console.log(multiply(1, 2));
console.log(multiply(30, 5));
console.log(multiply(6, 5));
console.log(multiply(100, 2));