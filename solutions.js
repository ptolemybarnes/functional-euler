var R = require('ramda');

module.exports = (function(R) { 

  var filterWithTwo = function(firstCondition, secondCondition) {
    return R.filter(function(value) {
      return (firstCondition(value) || secondCondition(value))
    })
  }

  var selectMultiplesOfThree = function(value) { return value % 3 == 0 };
  var selectMultiplesOfFive  = function(value) { return value % 5 == 0 };
  var selectMultiplesOfThreeOrFive = filterWithTwo(selectMultiplesOfThree, selectMultiplesOfFive);
  var adder                        = function(sum, value) { return sum + value };
  var findSumOfMultiplesWithin     = R.compose(R.reduce(adder, 0), filterWithTwo(selectMultiplesOfThree, selectMultiplesOfFive));

  return { 
    findSumOfMultiplesWithin: findSumOfMultiplesWithin
  }

})(R);
