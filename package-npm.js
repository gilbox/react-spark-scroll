var p = require('./package');

p.main='lib';
p.scripts=p.devDependencies=undefined;

module.exports = p;