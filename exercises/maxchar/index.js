// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    //object to store the key values Character Map
    let charMap = {};
    //helper variables
    let max = 0;
    let maxChar = '';
    //iterate through the string and add a point for the value of each char instance

    for(let char of str){
        charMap[char] = charMap[char] + 1 || 1;
    }

    //using a for IN syntax because it's an object. 
    for(let key in charMap){
        //if the key value is greater than max, reset the helper variables
        if(charMap[key] > max){
            max = charMap[key];
            maxChar = key;
        }        
    }

    return maxChar;      
}

module.exports = maxChar;
