// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    
    let reversed= n.toString().split('').reverse().join('');
    //reversed contains the - sign but when you parseInt it drops it.   
    //use Math.sign() returns 1 if positive, -1 if negative.
    return parseInt(reversed) * Math.sign(n);
}

module.exports = reverseInt;
