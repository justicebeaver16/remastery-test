/*
Write a function `twoSum(arr, target)` that accepts an array and a target number
as args. The function should a return a boolean indicating if two distinct
numbers of the array add up to the `target` value. You can assume that input
array contains only unique numbers.
*/

// Your code here 
function twoSum(arr, target) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let complement = target - arr[i];
    if (result[complement] !== undefined) {
      return true;
    }
    result[arr[i]] = i;
  }
  return false;
}

console.log(twoSum([1, 7, 3, 0, 2], 5)); // true
console.log(twoSum([1, 7, 3, 0, 2], 6)); // false
console.log(twoSum([4, 6, 2, 3], 8)); // true
console.log(twoSum([4, 6, 2, 3], 11)); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = twoSum;
  } catch (e) {
    module.exports = null;
  }