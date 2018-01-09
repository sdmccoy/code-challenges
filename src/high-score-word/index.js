module.exports = (x) => {
  console.log(x);
  let alph = 'abcdefghijklmnopqrstuvwxyz';
  //split the words
  let wordsArr = x.split(' ');
  //hold values of each word
  let wordVal = 0;
  //push value of each word into array
  let valArr = [];

  //iterate through split array
  wordsArr.map(word => {
    //iterate through each word
    for(let i = 0; i <= word.length; i++){
      let letter = word.charAt(i);
      let letterVal = alph.indexOf(word.charAt(i)) + 1;
      //sum the value of each letter in the word
      wordVal += letterVal;

      if(!letter.length){
        //save value in array at same index
        valArr.push(wordVal);
        //set value to 0 after each word
        wordVal = 0;
      }
    }
  });
  //return the highest value word by matching the index
  return wordsArr[valArr.indexOf(Math.max(...valArr))];
}
