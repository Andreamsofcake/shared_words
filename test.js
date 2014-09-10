var chai = require('chai');
var expect = chai.expect;

var functions = require('./index');
var findWord = functions.findWord



describe('findWord()', function() {
  it('find words in common', function() {
  	var array1 = [1];
  	var array2 = [1];
  	var result = findWord(array1, array2);
    expect(result).to.eql(1);
  });
});