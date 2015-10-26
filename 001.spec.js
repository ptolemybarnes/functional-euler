// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.
//
var R = require('ramda');


var selectMultiplesOfThree = function(value) { return value % 3 == 0 };
var selectMultiplesOfFive  = function(value) { return value % 5 == 0 };

var filterWithTwo = function(firstCondition, secondCondition) {
  return R.filter(function(value) {
    return (firstCondition(value) || secondCondition(value))
  })
}

var selectMultiplesOfThreeOrFive = filterWithTwo(selectMultiplesOfThree, selectMultiplesOfFive);
var adder                        = function(sum, value) { return sum + value };
var findSumOfMultiplesWithin      = R.compose(R.reduce(adder, 0), filterWithTwo(selectMultiplesOfThree, selectMultiplesOfFive));

describe('001', function() { 
  it('finds the sum of all multiples of 3 or 5 below 1000', function() {
    expect(findSumOfMultiplesWithin(R.range(1, 1000))).toEqual(233168)
  });
});
