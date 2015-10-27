var R = require('ramda');

module.exports = (function(R) { 

  var filterWithTwo = function(firstCondition, secondCondition) {
    return R.filter(function(value) {
      return (firstCondition(value) || secondCondition(value))
    })
  }

  var selectMultiplesOfThree = function(value) { return value % 3 == 0 };
  var selectMultiplesOfFive  = function(value) { return value % 5 == 0 };
  var selectMultiplesOfTwo   = function(value) { return value % 2 == 0 };
  var selectMultiplesOfThreeOrFive = filterWithTwo(selectMultiplesOfThree, selectMultiplesOfFive);
  var adder                        = function(sum, value) { return sum + value };
  var findSumOfMultiplesWithin     = R.compose(R.reduce(adder, 0), filterWithTwo(selectMultiplesOfThree, selectMultiplesOfFive));
  var generateFibonacciRange       = function(max) {
    var output = [0, 1];
    while(output[output.length - 1] < max) { 
      output.push(output[output.length - 1] + output[output.length - 2]);
    }
    return output
  }

  var sumOfEvenFibonacciNumsBelow = function(max) {
    return generateFibonacciRange(max).filter(selectMultiplesOfTwo).reduce(adder)
  };

  return { 
    findSumOfMultiplesWithin:    findSumOfMultiplesWithin,
    sumOfEvenFibonacciNumsBelow: sumOfEvenFibonacciNumsBelow
  }

})(R);
