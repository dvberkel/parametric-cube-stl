#! /usr/bin/env node

var dot = require('dot');
var cube = dot.process({ path: './templates' });
var toScientificNotation = require('./lib/science');

var figure = 'solid';
var data = {};
switch (process.argv.length) {
case 3:
    figure = 'solid';
    data.a = parseInt(process.argv[2]);
    break;
default:
    figure = 'solid';
    data.a = 1;
    break;
}

var result = cube[figure]({ a: toScientificNotation(data.a) });

console.log(result);
