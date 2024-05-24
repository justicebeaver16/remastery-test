/*
Write a function `minValue(nums)` that takes in an array of numbers as an arg.
The function should return the smallest number of the array.

If the array is empty, the function should return `null`.
*/

// Your code here 
function minValue(nums) {
  let currentSmallest = nums[0];
  if (currentSmallest === undefined){
    return null;
  }
  for (let i = 0 ; i <= nums.length ; i++) {
    if (nums[i] < currentSmallest) {
      currentSmallest = nums[i];
    } 
  }
  return currentSmallest;
}

console.log(minValue([4, 6, 3, 5, 2, 4])); // 2
console.log(minValue([-2, -3, -7, 3 ])); // -7
console.log(minValue([])); // null

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = minValue;
  } catch (e) {
    module.exports = null;
  }