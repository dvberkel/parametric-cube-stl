#! /usr/bin/env node

var dot = require('dot');
dot.templateSettings.strip = false;

var cube = dot.process({ path: './templates' });
var parse = require('./lib/arguments');

var data = parse(process.argv);

var result = cube[data.figure](data.measure);

console.log(result);
