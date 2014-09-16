var _ = require('lodash');
//names

var arrays = [['firstName', 'Andrea'], ['lastName', 'Moulding'], ['age', 24]];
var person = {};

arrays.forEach(function(pairArray) {
  var key = pairArray[0];
  var value = pairArray[1];
  person[key] = value;
});
console.log(person);


var person = _.reduce(arrays, function(object, pairArray) {
  var key = pairArray[0];
  var value = pairArray[1];
  object[key] = value;
  return object; },
 {});
console.log(person);

//numbers

var numbers = [1, 2, 3, 4, 5, 6];
var sum = 0;
numbers.forEach(function(n) {
  sum += n;
});


var numbers = [1, 2, 3, 4, 5, 6];
var sum = _.reduce(numbers, function(sum, n) { return sum + n; }, 0);
