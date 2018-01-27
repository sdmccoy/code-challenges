// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//FOR LOOP version x 2 
//Big O(n)
function reverse(str) {
    //create a new str to return after loop
    let reversedStr = '';
    //iterate through str from the end to front, concat to new variable
    
    // for (var i = str.length-1; i >= 0; i--){
        
    //     reversedStr += str[i];
    // }
    //using ES6 syntax
    for (let characters of str){
        reversedStr = characters + reversedStr;
    }
    return reversedStr;
}

//REDUCE method helper
// function reverse(str){
//     //put string into array before reducer helper
//     //create acc and current with callback function on each item
//     return str.split('').reduce((reversedStr, current) => {
//         return current + reversedStr;
//     })
// }

//SPLIT REVERSE AND JOIN method helpers
// function reverse(str){
    // //split the string into an array
    // let strArr = str.split('');
    // console.log('str1 =',str );
    // //reverse each character
    // strArr.reverse();
    // console.log('str2 =',strArr );
    // //join back together to string
    // return strArr.join('');
    // console.log('str3 =',strArr );
    // 
    //oneliner syntax
    // return str.split('').reverse().join('');
    // 
// }

module.exports = reverse;
