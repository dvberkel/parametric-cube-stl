#! /usr/bin/env node

var cube = require('dot').process({ path: './templates' });

var result = cube.solid({ a: '1.000000e+00' });

console.log(result);
