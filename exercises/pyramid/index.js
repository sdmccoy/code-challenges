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

function pyramid(n) {
  
  //take n-1 and add it to n, this is how many # needed in last row, aka columns
  const midPoint = Math.floor((2*n -1) / 2);
  let columns = n + (n - 1);
  // console.log('col= ', columns);
  // console.log('n = ',n);
  for(let row = 0; row < n; row++){
    let level = '';
    for(let column = 0; column < 2 * n - 1; column++){
      if(midPoint - row <= column && midPoint + row >= column){
        level+='#';
      } else {
        level+=' ';
      }
    }
    console.log(level);
  }
  

}

module.exports = pyramid;
