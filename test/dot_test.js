var doT = require('dot');

var assert = require('chai').assert;

describe('doT', function(){
    it('should interpolate templates', function(){
        var template = doT.template('Hello, {{= it.subject }}!');

        var result = template({ subject: 'World' });

        assert(result, 'Hello, World!');
    });
});
