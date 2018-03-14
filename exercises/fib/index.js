// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//SOLUTION using for loop
function fib(n) {
  // start of the series
  let series = [];
  // if n is 0 or 1 then return 0 and stop
  if(n === 0 || n === 1) return n;

  // loop
  for (let i = 0; i <= n; i++) {
    // push in the 0 and 1 to start
    if (series.length < 2) {
      series.push(i);
    } else {
      // now there's two entries to add and start the series
      let entry = series[i - 2] + series[i -1];
      series.push(entry);
    }
  }
  // return the result
  return series[n];
}

module.exports = fib;
