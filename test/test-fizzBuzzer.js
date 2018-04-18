// import chai, declare expect variable
const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
     // test the normal case
    it('should devide by 5,3,&15', function() {
      //range of normal inputs
        const normalCases = [
          {num:5, expected: 'buzz'},
          {num:3, expected: 'fizz'},
          {num:15, expected: 'fizz-buzz'}
        ];
        normalCases.forEach(function(input) {
            const answer = fizzBuzzer(input.num);
            expect(answer).to.equal(input.expected)
        });
    });

    it('should throw an error', function() {
        //range of badd inputs
        const badInputs = [
            ['@'],
            ['b'],
            [` `]                  
        ];
        //prove the error
        badInputs.forEach(function(input) {
            expect(function() {
                fizzBuzzer(input);
            }).to.throw(Error);
            
        });
    });

});
