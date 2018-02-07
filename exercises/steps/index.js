// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//SOLUTION recursion with conditionals
function steps(n, row = 0, stair = ''){
    //set default variables
    //base case to stop recursion
    if(n === row) return;
    //jump to the next row if you've reached the end, log the result
    if(n === stair.length){

        console.log(stair);
        //call recursively for next row, add one to row, pass in empty string for stair
        steps(n, row + 1, '')
        return;
    }
    //set up the concat of # and spaces with conditionals
    if(stair.length <= row){
        stair+='#';
    } else {
        stair+=' ';
    }
    //call recursively while the stair length != n until it's at the end of the column
    steps(n, row, stair);
}

//SOLUTION nested for loops using row and column logic
// function steps(n) {
//     //nest for loops comparing row vs column. Using conditional to add # or space
//     for(let row = 0; row < n; row++){
//         let result = '';
//         for(let column = 0; column < n; column++){
//             if(column <= row){
//                 result+='#';
//             } else {
//                 result+=' ';
//             }
//         }
//         console.log(result);
           
//     }
// }

module.exports = steps;
