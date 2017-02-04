#! /usr/bin/env node

var dot = require('dot');
dot.templateSettings.strip = false;

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
    if (units.b <= units.a/2) {
        throw new Error('b should be bigger than a/2');
    }
    break;
case 5:
    console.log('windowed');
    figure = 'windowed';
    units.a = parseInt(process.argv[2]);
    units.b = parseInt(process.argv[3]);
    units.c = parseInt(process.argv[4]);
    if (units.b >= units.a) {
        throw new Error('b should be smaller than a');
    }
    if (units.b <= units.a/2) {
        throw new Error('b should be bigger than a/2');
    }
    if (units.c >= units.a) {
        throw new Error('c should be smaller than a');
    }
    if (units.b <= units.a/2) {
        throw new Error('c should be bigger than a/2');
    }
    if (units.c >= units.b) {
        throw new Error('c should be smaller than b');
    }
    break;
default:
    figure = 'solid';
    units.a = 1;
    break;
}

var data = {
    a: toScientificNotation(units.a),
    b: toScientificNotation(units.b),
    c: toScientificNotation(units.c),
    d: toScientificNotation(units.a - units.b),
    e: toScientificNotation(units.a - units.c)
};

var result = cube[figure](data);

console.log(result);
