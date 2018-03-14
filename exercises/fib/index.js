// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// SOLUTION using for loop
// BIG 0(n)
// function fib(n) {
//   // start of the series
//   let series = [];
//   // if n is 0 or 1 then return 0 and stop
//   if(n === 0 || n === 1) return n;

//   // loop
//   for (let i = 0; i <= n; i++) {
//     // push in the 0 and 1 to start
//     if (series.length < 2) {
//       series.push(i);
//     } else {
//       // now there's two entries to add and start the series
//       let entry = series[i - 2] + series[i -1];
//       series.push(entry);
//     }
//   }
//   // return the result
//   return series[n];
// }

// SOLUTION with recursion
function fib(n) {
  if (n < 2) {
    return n;
  }
  // if n is 5, it will call fib with 4 and 3. 4 will then break down to 3 and 2 fib calls, until you get down to 1 and 0 calls and then you add up the 1s as the solution.
  return fib(n - 1) + fib(n - 2);
}

module.exports = fib;
