module.exports = (arr) => {
  let newArr = arr.filter(num => {
    let result = arr.includes(num, arr.indexOf(num) + 1);
    return result === false;
  });
  return newArr.reduce((sum, value) => sum + value);
};
