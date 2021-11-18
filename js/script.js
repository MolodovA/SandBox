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