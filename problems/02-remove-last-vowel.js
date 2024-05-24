/*
Write a function `removeLastVowel(word)` that takes in a string and returns the
string with its last vowel removed.
*/

// Your code here 
let removeLastVowel = function (word) {
  let arraychar = word.split('');
  let vowels = 'aeiouAEIOU';
  let indexoflastvowel = 0;
  for (let i = arraychar.length - 1; i >= 0; i--) {
    let currentchar = arraychar[i];
    if (vowels.includes(currentchar)){
      indexoflastvowel = i;
      arraychar.splice(indexoflastvowel, 1);
      return arraychar.join('');
    }
  }
  return word;
}

console.log(removeLastVowel('bootcamp')); // 'bootcmp'
console.log(removeLastVowel('better')); // 'bettr'
console.log(removeLastVowel('graph')); // 'grph'
console.log(removeLastVowel('thy')); // 'thy'

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = removeLastVowel;
  } catch (e) {
    module.exports = null;
  }