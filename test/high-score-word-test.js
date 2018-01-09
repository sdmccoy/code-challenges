'use strict';

const expect = require('expect');
const high = require('../src/high-score-word');

describe('when an string of words are passed in', () => {
  it('it should return the highest value word based on sum of letter position in alphabet', () => {
    expect(high('man i need a taxi up to ubud')).toEqual('taxi');
    expect(high('what time are we climbing up the volcano')).toEqual('volcano');
    expect(high('take me to semynak')).toEqual('semynak');
  });
});


describe('when an empty string is passed in', () => {
  it('it should throw an error', () => {
    try{
      high('');
    }
    catch(err){
      expect(err).toEqual(new Error('empty string passed in'));
    }
  });
});
