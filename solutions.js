var R = require('ramda');

module.exports = (function(R) { 

  var filterWithTwo = function(firstCondition, secondCondition) {
    return R.filter(function(value) {
      return (firstCondition(value) || secondCondition(value))
    })
  }

  var selectMultiplesOf = R.curry(function(divisor, value) {
    return value % divisor == 0;
  })

  var adder                        = function(sum, value) { return sum + value };
  var findSumOfMultiplesWithin     = R.compose(R.reduce(adder, 0), filterWithTwo(selectMultiplesOf(3), selectMultiplesOf(5)));

  var generateFibonacciRange       = function(max) {
    var output = [0, 1];
    while(output[output.length - 1] < max) { 
      output.push(output[output.length - 1] + output[output.length - 2]);
    }
    return output
  }

  var sumOfEvenFibonacciNumsBelow = function(max) {
    return generateFibonacciRange(max).filter(selectMultiplesOf(2)).reduce(adder)
  };

  return { 
    findSumOfMultiplesWithin:    findSumOfMultiplesWithin,
    sumOfEvenFibonacciNumsBelow: sumOfEvenFibonacciNumsBelow
  }

})(R);
