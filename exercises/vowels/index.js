// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//SOLUTION using for loop and hard code elements in a conditional
// function vowels(str) {
//   //declare variable to return
//   let numOfVowels = 0;
//   let charCheck = ['a', 'e', 'i', 'o', 'u'];
//   //loop through str and use conditional to add
//   for (let element of str.toLowerCase()) {
//     if (charCheck.includes(element)) {
//       numOfVowels++;
//     }      
//   }
//   return numOfVowels;
// }

//SOLUTION using regex and match method
function vowels(str){
  let result = str.match(/[aeiou]/ig);
  //if no match, match helper will return null. Use ternary to return 0 if so.
  return result ? result.length : 0;
}
module.exports = vowels;
