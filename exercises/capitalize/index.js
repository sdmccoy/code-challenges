// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//SOLUTION with for loop, split, uppercase, slice, and join
// function capitalize(str) {
//     let result = [];
//     //split to an array separating each word
//     let strArr = str.split(' ');
//     //loop through array, use [i][1] to cap each word
//     for(let word of strArr){
        
//         result.push(word[0].toUpperCase() + word.slice(1));
//     }
    
//     //join back together
//     //return string
//     return result.join(' ');
// }

//SOLUTION with for loop, and manipulating string
function capitalize(str){
    //loop through string, find characters with a space to the left, cap it
    let result = '';
    for(let i = 0; i < str.length; i++){
        
        if(i === 0 || str[i - 1] === ' '){ 
            result += str[i].toUpperCase();
        } else {
            result += str[i];
        }
    }
    
    return result;
}

module.exports = capitalize;
