'use strict';

const expect = require('expect');
const repeats = require('../src/sum-array-single');

describe('when an array of integers is passed in ', () => {
  it('it should return the sum of only the single present values', () => {
    expect(repeats([1, 2, 1, 7, 3])).toEqual(12);
    expect(repeats([-1, -1, -3])).toEqual(-3);
    expect(repeats([-1, -1, -3, -4])).toEqual(-7);
  });
});
