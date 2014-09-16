var _ = require('lodash');

var greet = function (greeting, name) {
  return greeting + ' ' + name;
};
  var hi = _.partial(greet, 'hi');

console.log(hi('fred'));
console.log('dicks');



