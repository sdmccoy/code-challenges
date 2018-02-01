// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// //solution with helper function, iterates three times
// function anagrams(stringA, stringB) {
    
//     //invoke helper function
//     charMapA = buildCharMap(stringA);
//     charMapB = buildCharMap(stringB);

//     if (Object.keys(charMapA).length !== Object.keys(charMapB).length) return false;

//     //compare char maps
//     for (let char in charMapA){
//         if (charMapA[char] !== charMapB[char]) return false;
//         return true;
//     }
// }

// //build a helper function
// function buildCharMap(str){
//     let charMap = {};
//     let cleanStr = str.replace(/[^\w]/g,'').toLowerCase();
    
//     //push clean strings into char maps
//     for(var char of cleanStr){
//         //set char as a key and increase value each iter
//         charMap[char] = charMap[char] +1 || 1;
//     }

//     return charMap;
// }

//SOLUTION with methods replace, split, sort, then compare it
function anagrams(stringA, stringB){
    cleanA = stringA.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    cleanB = stringB.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    //needs to be turned back into a string otherwise it wont work. I because of THIS
    // if(cleanA !== cleanB) return false;
    // return true;
    return cleanA === cleanB;
}
module.exports = anagrams;
