var R = require('ramda');
var P = require('./solutions.js');

describe('001', function() { 
  it('finds the sum of all multiples of 3 or 5 below 1000', function() {
    expect(P.findSumOfMultiplesWithin(R.range(1, 1000))).toEqual(233168)
  });
});

describe('002: Even Fibonacci numbers', function() {
  it('finds the sum of the even valued terms below 4 million', function() { 
    expect(P.sumOfEvenFibonacciNumsBelow(4000000)).toEqual(4613732)
  });
});

