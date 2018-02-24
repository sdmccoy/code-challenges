// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//SOLUTION using for loop and hard code elements in a conditional
function vowels(str) {
  //declare variable to return
  let numOfVowels = 0;
  //loop through str and use conditional to add
  for (let element of str.toLowerCase()) {
    if (element === 'a' || element === 'e' || element === 'i' || element === 'o' || element === 'u') {
      numOfVowels += 1;
    }
  }
  return numOfVowels;
}

module.exports = vowels;
