'use strict';

const expect = require('expect');
const inverse = require('../src/inverse-num');

describe('when an array of integers is passed in ', () => {
  it('it should return the inverse +/- of each index', () => {
    expect(inverse([1, 2, 3])).toEqual([-1, -2, -3]);
    expect(inverse([-1, -2, -3])).toEqual([1, 2, 3]);
    expect(inverse([-1, 2])).toEqual([1, -2]);
    expect(inverse([0])).toEqual([0]);
    expect(inverse([1, 0])).toEqual([-1, 0]);

  });
});
