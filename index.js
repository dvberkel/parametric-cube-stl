var doT = require('dot');

var template = doT.template('Hello, {{= it.subject }}!');

var result = template({ subject: 'World' });

console.log(result);
