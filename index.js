var dots = require('dot').process({ path: './templates' });

var result = dots.hello({ subject: 'World' });

console.log(result);
