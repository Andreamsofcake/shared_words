var chai = require('chai');
var expect = chai.expect;

var functions = require('./index');
var findWord = functions.findWord




describe('findWord()', function() {
  it('find words in common', function() {
  	var array1 = ['Rock', 'paper', 'spock'];
  	var array2 = ['Rock', 'lizard', 'sissors'];
  	var result = findWord(array1, array2);
    expect(result).to.eql(['Rock']);
  });
});