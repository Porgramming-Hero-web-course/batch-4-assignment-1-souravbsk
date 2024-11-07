"use strict";
{
    // Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.
    const sumArray = (numbers) => {
        let sum = 0;
        numbers.forEach((num) => {
            sum = sum + num;
        });
        return sum;
    };
    const sumOfNumbers = sumArray([1, 2, 3, 4, 5]);
    console.log(sumOfNumbers);
    // output: 16
    const sumOfNumber2 = sumArray([5, 4, 6, 8]);
    console.log(sumOfNumber2);
    //output:23
}
