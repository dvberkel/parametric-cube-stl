#! /usr/bin/env node

var dot = require('dot');
var cube = dot.process({ path: './templates' });
var toScientificNotation = require('./lib/science');

var result = cube.solid({ a: toScientificNotation(123) });

console.log(result);
