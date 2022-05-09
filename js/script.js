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
console.log(dontGiveMeFive(4, 17));


//