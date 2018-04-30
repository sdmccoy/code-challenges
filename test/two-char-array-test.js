'use strict';

const solution = require('../src/two-char-array/index.js');

const expect = require('expect');

describe('solution with vanilla JS ', () => {
  it('it should return an array of 2 char strings at each index when even length', () => {
    expect(solution('abcd')).toEqual(['ab', 'cd']);
  });
});
