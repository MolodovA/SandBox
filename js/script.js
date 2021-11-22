'use strict'
// solution tasks

//Now you have to write a function that takes an argument and returns the square of it.
function square(a) {
   return a * a;
}
//===========================================================================
//Make a simple function called greet that returns the most-famous "hello world!".
let greet = () => 'hello world!'
//============================================================================

// Implement a function which multiplies two numbers.
let multiply = (a, b) => a * b;

//=============================================================================
// Implement a function which convert the given boolean value into its string representation
let booleanToString = (b) => b ? 'true' : 'false'

//================================================================================
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
const bonusTime = (salary, bonus) => bonus ? '£' + salary * 10 : '£' + salary
//===================================================================================
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
const moveZeros = function (arr) {
   let zero = [];
   let remain = []
   let joint = []
   for (i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
         zero.push(arr[i])
      }
      else {
         remain.push(arr[i])
      }

   }
   return joint = remain.concat(zero)
}
//==================================================================================
// Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.Use destructuring assignment to swap the values of a and b so that a receives the value stored in b, and b receives the value stored in a.
let a = 6;
let b = 8;
[a, b] = [b, a]

console.log(a, b);

// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
function countBits(num) {
   let newArr = num.toString(2).split('').map(Number);
   let count = 0;
   for (let i = 0; i < newArr.length; i++) {
      count += newArr[i];
   }
   return count;
}


// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
const cockroachSpeed = (s) => Math.floor(s * (100 / 3.6))


//We need a function that can transform a string into a number. What ways of achieving this do you know?
const stringToNumber = (str) => +str;

// For correct answer program should return int from 0 to 9.
// Assume test input string always valid and may look like "1 year old" or "5 years old", etc.. The first char is number only.
function getAge(inputString) {

   let year = inputString[0];
   return +year;

   // When provided with a number between 0-9, return it in words.
   // Input :: 1
   // Output :: "One".
   function switchItUp(number) {
      switch (number) {
         case 0:
            return 'Zero';
            break;
         case 1:
            return 'One';
            break;
         case 2:
            return 'Two';
            break;
         case 3:
            return 'Three';
            break;
         case 4:
            return 'Four';
            break;
         case 5:
            return 'Five';
            break;
         case 6:
            return 'Six';
            break;
         case 7:
            return 'Seven';
            break;
         case 8:
            return 'Eight';
            break;
         case 9:
            return 'Nine';
            break;
      }
   }
}

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
const correct = (str) => str.replace(/0/g, 'O').replace(/1/g, 'I').replace(/5/g, 'S');