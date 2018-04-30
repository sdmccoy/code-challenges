

module.exports = (str) => {

  //return an arr of strings split with every two char
  //if str.length = odd, add _ end of string
  //for loop, var to add two char as string, counter var, if statement with counter = 2 push into arr var

  if (str.length % 2 !== 0) {
    str += '_'
  }

  let twoCharArr = []
  let count = 0
  let set = ''
  for (let i = 0; i <= str.length; i++) {

    if (count === 2) {
      twoCharArr.push(set)
      count = 0
      set = ''
    }

    set += str[i]
    count++
  }

  return twoCharArr
}

// function methodSolution(str){
//   str.length % 2 === 0 ? str : str =+ '_'
//   return str.match(/../g)
// }

