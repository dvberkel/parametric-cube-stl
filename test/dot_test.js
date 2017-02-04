var doT = require('dot');
var assert = require('chai').assert;
var hello = require('../lib/hello');

describe('doT', function(){
    it('should interpolate templates', function(){
        var template = doT.template('Hello, {{= it.subject }}!');

        var result = template({ subject: 'World' });

        assert(result, 'Hello, World!');
    });

    it('should interpolate templates from template file', function(){
        var result = hello({ subject: 'World' });

        assert(result, 'Hello, World!');
    });
});
