const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');


// unit tests for our `fizz buzzer` function
describe('fizz buzzer', function() {

  // test the normal case
  it('should raise error if not number', function() {
  	
  fizzBuzzer('21').should.throw(Error);

  });

  it('should be divisble by 15 and return fizz-buzz', function() {
  const result = fizzBuzzer(15);
  console.log(result);
  result.should.be.a('string');
  result.should.equal('fizz-buzz');    

  });

  it('should be divisble by 5 and return buzz', function() {
  const result= fizzBuzzer(25);
  console.log(result);
  result.should.be.a('string');
  result.should.equal('buzz');   
  });

  it('should be divisble by 3 and return fizz', function() {
  const result= fizzBuzzer(21);
  console.log(result);
  result.should.be.a('string');
  result.should.equal('fizz');   
  });


});