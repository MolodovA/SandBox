// sort array
function solution(nums) {
   return nums ? nums.sort(function (a, b) { return a - b; }) : [];
}


function filter_list(l) {
   console.log(l.join('').replace(/[^\d-]/g, ''))
   return l
}

console.log(filter_list([1, 2, 'a', 'b']));