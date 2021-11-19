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

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
function twiceAsOld(dadYearsOld, sonYearsOld) {
   if (sonYearsOld === 0) {
      return dadYearsOld;
   }
   else if (dadYearsOld / sonYearsOld === 2) {
      return 0
   }
   else {
      let n = (dadYearsOld - 2 * sonYearsOld);
      return n
   }
}

