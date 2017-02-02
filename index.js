#! /usr/bin/env node

var dot = require('dot');
var cube = dot.process({ path: './templates' });
var toScientificNotation = require('./lib/science');

var figure = 'solid';
var units = {};
var data = {};
switch (process.argv.length) {
case 3:
    figure = 'solid';
    units.a = parseInt(process.argv[2]);
    datat = {
        a: toScientificNotation(units.a)
    };
    break;
case 4:
    figure = 'hollow';
    units.a = parseInt(process.argv[2]);
    units.b = parseInt(process.argv[3]);
    if (units.b >= units.a) {
        throw new Error('b should be smaller than a');
    }
    data = {
        a: toScientificNotation(units.a),
        b: toScientificNotation(units.b),
        d: toScientificNotation(units.a - units.b)
    };
    break;
default:
    figure = 'solid';
    data.a = 1;
    break;
}

var result = cube[figure](data);

console.log(result);
