var toScientificNotation = require('../lib/science.js');

var assert = require('chai').assert;

describe('toScientificNotation', function(){
    it('should correctly convert description of numbers', function(){
        var data = [
            { description: 1,     expected: '1.000000e+00' },
            { description: 12,    expected: '1.200000e+01' },
            { description: 123,   expected: '1.230000e+02' },
            { description: 1234,  expected: '1.234000e+03' },
            { description: 12345, expected: '1.234500e+04' }
        ];

        data.forEach(function(testcase){
            var result = toScientificNotation(testcase.description);

            assert(result, testcase.expected);
        });
    });
});
