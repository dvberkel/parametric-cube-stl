var dots = require('dot').process({ path: './templates' });

var result = dots.cube({ a: '1.000000e+00' });

console.log(result);
