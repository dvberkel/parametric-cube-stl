#! /usr/bin/env node

var dot = require('dot');
var cube = dot.process({ path: './templates' });
var toScientificNotation = require('./lib/science');

var figure = 'solid';
var units = { a: 0, b: 0, c: 0, d: 0, e: 0 };
switch (process.argv.length) {
case 3:
    figure = 'solid';
    units.a = parseInt(process.argv[2]);
    break;
case 4:
    figure = 'hollow';
    units.a = parseInt(process.argv[2]);
    units.b = parseInt(process.argv[3]);
    if (units.b >= units.a) {
        throw new Error('b should be smaller than a');
    }
    break;
default:
    figure = 'solid';
    data.a = 1;
    break;
}

var data = {
    a: toScientificNotation(units.a),
    b: toScientificNotation(units.b),
    d: toScientificNotation(units.a - units.b)
};

var result = cube[figure](data);

console.log(result);
