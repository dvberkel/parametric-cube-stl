#! /usr/bin/env node

var dot = require('dot');
var cube = dot.process({ path: './templates' });

function digits(n) {
    return Math.floor(Math.log(n)/Math.log(10) + 1);
}

function padRight(word, pad, length) {
    var copy = word.slice(0);
    while (copy.length < length) {
        copy += pad;
    }
    return copy.slice(0, length);
}

function toScientificNotation(description) {
    var units = parseInt(description);
    var d = digits(units) - 1;
    var e = d < 10 ? '0' + d.toString() : d.toString();
    var n = description[0] + '.' + description.slice(1);
    var m = padRight(n, '0', 8);
    console.log(m, e);

    return m + 'e+' + e;
}

var result = cube.solid({ a: toScientificNotation('123') });

console.log(result);
