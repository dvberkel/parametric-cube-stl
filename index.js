#! /usr/bin/env node

var cube = require('./lib/cube');
var parse = require('./lib/arguments');

var data = parse(process.argv);

var result = cube[data.figure](data.measure);

console.log(result);
