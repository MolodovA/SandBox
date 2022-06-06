function spinWords(string) {
   if (string.length > 5) {
      return string.split(' ').map(word => word.length > 5 ? word.split("").reverse().join("") : word).join('')
   }
}
spinWords("Welcome")


function findChildren(dancingBrigade) {
   let arr = dancingBrigade.split('').sort();
   let capitals = [];

   for (i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === arr[i].toUpperCase()) {
         capitals.push(arr.splice(i, 1).toString());
      }
   }
   for (i = 0; i < capitals.length; i++) {
      let capLetter = capitals[i].toLowerCase();
      if (arr.indexOf(capLetter) !== -1) {
         arr.splice(arr.indexOf(capLetter), 0, capitals[i]);
      }
   }
   return arr.join('');
}
findChildren('uwwWUueEe');

function dontGiveMeFive(start, end) {
   let arr = []
   for (let i = start; i < end; i++) {
      if (!Number.isInteger(i / 5) || (!Number.isInteger(i / 10))) {
         arr.push(i)
      }

   }
   return arr.length
}
dontGiveMeFive(4, 17);


function solution(str) {
   if (!str) {
      return []
   }
   else if (Number.isInteger(str.length / 2)) {
      return str.match(/..?/g)
   }
   let newArr = str.match(/..?/g)
   newArr[newArr.length - 1] = newArr[newArr.length - 1] + '_'
   return newArr

}
solution("abcdefh");


//
function cutCancerCells(organism) {
   let arr = organism.split('')
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 'c') arr[i] = ''
      if (arr[i] === 'C') {
         arr[i] = ''
         if (arr[i - 1] && arr[i - 1] === arr[i - 1].toLowerCase()) {
            arr[i - 1] = '';
         }
         if (arr[i + 1] && arr[i + 1] === arr[i + 1].toLowerCase()) {
            arr[i + 1] = ''
         }
      }
   }
   return arr.join('')
}


// best solution
function cutCancerCells(organism) {
   return organism.replace(/c|[a-z]?C[a-z]?/g, '')
}
cutCancerCells('aCCcHCCCaCCaDCCCCCC');


function arrayDiff(a, b) {
   return a.filter(elem => !b.includes(elem))
}

arrayDiff([1, 2, 2], [2]);

function sumIntervals(intervals) {
   for (let i = 0; i < intervals.length; i++) {
      intervals[i]
      let arr = []
      for (let h = intervals[i][0]; h < intervals[i][intervals[i].length - 1]; h++) {
         arr.push(h);
         arr.length;
      }
   }
}
sumIntervals([[1, 4], [7, 10], [3, 5]]);


const qwe = (a, b) => {
   if (b !== undefined) return a + b
   return (c) => a * c
}
qwe(5, 0);
qwe(1)(7);

function reverseWords(str) {
   return str.split(' ').reverse().join(' ')
}


console.log(1);




const arr = [[1], 3, ['4', '8'], [[3, 5]]]
console.log(arr.flat(2));


function bn(x, y) {
   return y == 1 ? x : x * bn(x, y - 1)
}

console.log(bn(2, 3))


let company = {
   sales: [{
      name: 'John',
      salary: 1000
   }, {
      name: 'Alice',
      salary: 600
   }],

   development: {
      sites: [{
         name: 'Peter',
         salary: 2000
      }, {
         name: 'Alex',
         salary: 1800
      }],

      internals: [{
         name: 'Jack',
         salary: 1300
      }]
   }
};

function sumSalaries(department) {
   if (Array.isArray(department)) { // случай (1)
      return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
   } else { // случай (2)
      let sum = 0;
      for (let subdep of Object.values(department)) {
         sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
      }
      return sum;
   }
}
sumSalaries(company);


// В массиве найти максимальное число 
const numbers = [1, 45, 66, 2, 4, 6, -2, -10, -100, 100]
let max = numbers[0];
numbers.forEach((item) => {
   if (item < max) {
      max = item
   }
})
function incrementer(nums) {
   if (!nums) {
      return []
   }
   return nums.map((item, i) => (item + (i + 1)) % 10)

}

incrementer([4, 6, 7, 1, 3])


let courses = [
   { name: "Courses in England", prices: [0, 100] },
   { name: "Courses in Germany", prices: [500, null] },
   { name: "Courses in Italy", prices: [100, 200] },
   { name: "Courses in Russia", prices: [null, 400] },
   { name: "Courses in China", prices: [50, 250] },
   { name: "Courses in USA", prices: [200, null] },
   { name: "Courses in Kazakhstan", prices: [56, 324] },
   { name: "Courses in France", prices: [null, null] },
];



function filterRange(requiredRange) {
   let [minValue, maxValue] = requiredRange

   return courses.filter(i => {
      if (maxValue) {
         return minValue <= i.prices[0] && i.prices[0] <= maxValue && maxValue >= i.prices[1]
      }
      return minValue <= i.prices[0]
   })
}

console.log(filterRange([null, 200]))
console.log(filterRange([100, 350]))
console.log(filterRange([200, null]))


function sortRange(x) {
   if (x === 'down') {
      return [...courses].sort((a, b) => a.prices[0] > b.prices[0] ? 1 : -1)
   }
   return [...courses].sort((a, b) => b.prices[0] > a.prices[0] ? 1 : -1)

}

function getDivisorsCnt(n) {
   if (n === 1) {
      return 1
   }
   let res = 0
   for (let i = 0; i <= n; i++) {
      if (Number.isInteger(n / i)) {
         res += 1
      }
   }
   return res
}


console.log(getDivisorsCnt(10));



var twoSum = function (nums, target) {
   for (let index = 0; index < nums.length; index++) {
      for (let j = 0; j < nums.length; j++) {
         if (nums[i] + nums[j] === target) {
            return [i, j]
         }
      }

   }

}

console.log(twoSum([7, 3, 8, 1, 3], 9));