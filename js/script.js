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

// Bob needs a fast way to calculate the volume of a cuboid with three values: length, width and the height of the cuboid. Write a function to help Bob with this calculation.
class Kata {
   static getVolumeOfCuboid(length, width, height) {
      return length * width * height
   }
}

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]
function getSize(w, h, d) {
   let area = 2 * (d * w) + 2 * (d * h) + 2 * (h * w)
   let volume = w * h * d;
   let arr = [];
   arr.push(area, volume);
   return arr;
}

// Given a year, return the century it is in.
const century = (year) => {
   if (year <= 0)
      return 0
   else if (year <= 100) {
      return 1;
   }
   else if (year % 100 == 0) {
      return year / 100 << " century";
   }
   else {
      return year / 100 + 1 << " century";
   }

}

// Write a function that rearranges an integer into its largest possible value.
// Example (Input --> Output)
function superSize(num) {
   return parseInt(num.toString().split('').sort((a, b) => b - a).join(''));
}

// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
function validParentheses(parens) {
   let opening = ['(']
   let closing = [')']
   let arr = []

   for (let i = 0; i < parens.length; i++) {
      if (opening.includes(parens[i])) {
         arr.push(parens[i])
      } else
         if (closing.indexOf(parens[i]) === opening.indexOf(arr[arr.length - 1])) {
            arr.pop()
         } else return false
   } return arr.length === 0;
}
//Very simple, given an integer or a floating-point number, find its opposite.
const opposite = (n) => n * -1



//Your classmates asked you to copy some paperwork for them.You know that there are 'n' classmates and the paperwork has 'm' pages.
//Your task is to calculate how many blank pages do you need.If n < 0 or m < 0 return 0.
const paperwork = (n, m) => n > 0 && m > 0 ? n * m : 0

/*
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.
This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);
This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
 */

function finalGrade(exam, projects) {
   if (exam > 90 || projects > 10) {
      return 100
   }
   else if (exam > 75 && projects >= 5) {
      return 90
   } else if (exam > 50 && projects >= 2) {
      return 75
   }
   return 0
}

//=======================================================================//
let usersArray = [
   { id: 101, name: 'Alex' },
   { id: 22, name: 'Alsu' },
   { id: 34, name: 'Alexis' },
   { id: 41, name: 'Alexa' },
   { id: 1, name: 'Aleksandr' },
   { id: 1, name: 'Aleksandr' },
]
let usersArray2 = [
   { id: 101, name: 'Alex' },
   { id: 22, name: 'Alsu' },
   { id: 34, name: 'Alexis' },
   { id: 41, name: 'Alexa' },
   { id: 1, name: 'Aleksandr' },
]
//console.log(usersArray.filter(f => f.id === 1));

function myFilter(a) {
   const newFilter = [];
   usersArray.forEach(e => {
      if (e.id !== 34) {
         newFilter.push(e)
      }
   });
   // console.log(newFilter);
}
myFilter(usersArray);
//=======================================================================//
//console.log(usersArray.map(u => u.name));
function myMap() {
   const newMap = []
   usersArray.forEach(u => {
      newMap.push(u.name)
   })
   console.log(newMap);
}
myMap(usersArray)
//=======================================================================//
//console.log(usersArray.find(u => u.id === 1));

/*function myFind() {
   let newFind;
   usersArray.forEach(u => {
      if (u.id === 1)
         newFind = u;
   })
   console.log(newFind);
}
myFind(usersArray)*/
//=======================================================================//
//console.log(usersArray.concat(usersArray2));



let numbers = [1, 2, 3, 4, 5, 67]
console.log(numbers.reduce(function (previousValue, item, index, array) {
   return item + previousValue;
}, 0));


let users = [
   {
      name: 'Alex',
      age: 34,
      scroder: 45,
   }, {
      name: 'Alexa',
      age: 41,
      scroder: 65,
   }, {
      name: 'Alexis',
      age: 38,
      scroder: 55,
   },
]

console.log(users.find(s => s.age === 11));

function myFind() {
   let newFind;
   users.forEach(u => {
      if (u.age === 1)
         newFind = u;
   })
   console.log(newFind);
}
myFind(users)


function howMuchILoveYou(nbPetals) {
   let array = ['a little', 'passionately', 'madly', 'a lot', , , 'not at all', 'I love you']
   for (let i = 0; i < array.length; i++) {
      console.log(i);
      if (nbPetals === i) {
         return console.log(array[i]);
      }
   }
}
howMuchILoveYou(3)


function countSheeps(a) {
   const newFilter = [];
   let count;
   a.forEach(e => {
      if (e) {
         newFilter.push(e)
         count = newFilter.length

      }
   });

   return console.log(`${count} ,"There are 17 sheeps in total"`);
}

countSheeps([true, true, true, false,
   true, true, true, true,
   true, false, true, false,
   true, false, false, true,
   true, true, true, true,
   false, false, true, true]);

// return sum positive numbers from arr 
function positiveSum(arr) {
   if (arr) {
      let positiveActive = arr.filter(f => f > 0);
      let result = positiveActive.reduce((a, b) => a + b)
      return result;
   }
   return 0
}
positiveSum([1, -2, 3, 4, 5])

//Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x) {
   return x.replace(/\s/g, '')
}


//We need a function that counts the number of sheep present in the array
// (true means present).

let array1 = [true, true, true, false,
   true, true, true, true,
   true, false, true, false,
   true, false, false, true,
   true, true, true, true,
   false, false, true, true];
function countSheeps(a) {
   let newArray = a.filter(f => f)
   return newArray.length
}
countSheeps(array1)

//Given a string of digits, you should replace any digit below 5 with '0' and any //digit 5 and above with '1'. Return the resulting string.
function fakeBin(x) {
   let newStringNumbers = x.split([])
   for (let i = 0; i < newStringNumbers.length; i++) {
      if (newStringNumbers[i] >= 5) {
         newStringNumbers[i] = 1
      }
      else {
         newStringNumbers[i] = 0
      }
   }
   return newStringNumbers.join('');
}
fakeBin(('45385593107843568'))
// best solution
//fakeBin = x => x.split('').map(e => e < 5 ? 0 : 1).join('');


//Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

function minMax(arr) {
   let min = Math.min.apply(null, arr)
   let max = Math.max.apply(null, arr)
   let result = [min, max]
   return result;
}
minMax([1, 2, 3, 4, 5]);
// best solution
//const minMax = arr => [ Math.min(...arr), Math.max(...arr) ];


const cannonsReady = (g) => {

   let count;
   for (let pirat in g) {
      console.log(g[pirat]);





   }

}
cannonsReady({ 'Mike': 'aye', 'Joe': 'aye', 'Johnson': 'aye', 'Peter': 'aye' })


function squareSum(numbers) {
   let finalyResult = numbers.reduce((a, b) => {
      return a + b ** 2
   }, 0)
   return finalyResult
}

squareSum([0, 3, 4, 5])


function basicOp(operation, value1, value2) {
   switch (operation) {
      case '+':
         return value1 + value2
      case '-':
         return value1 - value2
      case '*':
         return value1 * value2
      case '/':
         return value1 / value2
   }
}
console.log(basicOp('-', 4, 7))




function abbrevName(name) {
   return name
      .replace(/\b(\w)\w+/g, '$1')
      .replace(/\s/g, '.')
      .toUpperCase();
}

abbrevName("Sam Harris")




function sumOfMinimums(arr) {
   let sum = arr.map(m => Math.min(...m)).reduce((a, b) => a + b)

}
sumOfMinimums([[1, 2, 3, 4, 5]
   , [5, 6, 7, 8, 9]
   , [20, 21, 34, 56, 100]
])


const getReveresArray = n => Array.from(String(n), Number).reverse();

getReveresArray(123456789)

let obj = {
   name: "Her",
   age: 5,
   location: {
      city: "Uglovka",
      cuntry: 'Russia'
   }
}
let obj2 = obj;
obj2.age = 7
let obj3 = { ...obj, location: { ...obj.location } }
obj3.location.cuntry = 'Spain'
console.log(obj);

console.log(Object.keys(obj3).filter(f => f === 'name'));
console.log(Object.values(obj3));

const salary = (arr) => arr.reduce((a, b) => a + b)



console.log(salary([1200, 2950, 3600, 1920, 2700, 2390, 2400, 1600]));




// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.

function getSquarePositiveIntegers(array) {

   return [...array.filter(m => m % 2 === 0 && m > 0).map(m => m ** 2)]
}

getSquarePositiveIntegers([4, 5.6, -9.8, 3.14, 10, 6, 8.34, -2])


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.
const isEvenIndexSumGreater = (arr) => {
   return arr.filter((f, index) => index % 2 === 0).reduce((a, b) => a + b)
      > arr.filter((f, index) => index % 2 !== 0).reduce((a, b) => a + b)
      ? true : false


}
isEvenIndexSumGreater([1, 100, 2, 200])



function sumFirstNumbers(N) {
   if (N === 0) {
      return 0;
   }
   else if (N === 1) {
      return 1;
   }

   return sumFirstNumbers(N - 1) + N;

}

console.log(sumFirstNumbers(0));


//Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено
function getBanknoteList(amountOfMoney) {
   const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
   const result = []
   for (let i = 0; i < banknotes.length; i++) {
      while (amountOfMoney - banknotes[i] >= 0) {
         amountOfMoney -= banknotes[i];
         result.push(banknotes[i])
      }
   }
   return result;
}
console.log(getBanknoteList(2500));