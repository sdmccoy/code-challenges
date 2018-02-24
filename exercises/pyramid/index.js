// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//SOLUTION using nested for Loops
// function pyramid(n) {
  
//   //take n-1 and add it to n, this is how many # needed in last row, aka columns
//   const midPoint = Math.floor((2*n -1) / 2);

//   for(let row = 0; row < n; row++){
//     let level = '';
//     for(let column = 0; column < 2 * n - 1; column++){
//       if(midPoint - row <= column && midPoint + row >= column){
//         level+='#';
//       } else {
//         level+=' ';
//       }
//     }
//     console.log(level);
//   }
// }

//SOLUTION with recursion
function pyramid(n, row = 0, level = ''){
  //base statement, once the row === n we stop the function
  if(row === n) return;
  //you need the columns to equal 2 * n - 1, so if n = 3 then you need 5 columns
  //level is the content of each row, once level length and columns are equal, log it 
  if(level.length === 2 * n -1) {
    console.log(level);
    //return the function while increasing the row by 1 to go to the next level
    return pyramid(n, row + 1);
  }
  //add elements to the level if the above is not met
  const midPoint = Math.floor((2 * n - 1) / 2);
  //declare this variable, it will contain the element we'll add to the string
  let add;
  if ( midPoint - row <= level.length && midPoint + row >= level.length){
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}
module.exports = pyramid;
