// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//FOR LOOP with double variables
//best time and space complexity
function palindrome(str) {
    //loop through str from the back traversing to front - i
    //loop through str from the front traversing to back - k
    //declare a stop length depending on odd or even str
    //only interate through half of the string for time complexity
    let stopLength = str.length % 2 === 0 ? str.length/2 : Math.floor(str.length/2); 
    
    //compare both through each iteration, if any !== then return false 
    for(i = str.length-1, k = 0; k <= stopLength; i--, k++){
        if(str[k] !== str[i]) return false;    
    return true;
    }
}

//REVERSED string helper method
// function palindrome(str){
//     let reversed = str.split('').reverse().join('');
//     return reversed === str ? true : false;
// }
module.exports = palindrome;
