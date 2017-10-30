
module.exports = (integerArray) => {
  return integerArray.map(num => num === 0 ? 0 : -num);
};
