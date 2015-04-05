var p = require('./package');

p.name = 'react-spark-scroll-rekapi';
p.dependencies.rekapi = p.devDependencies.rekapi;
p.dependencies['react-spark-scroll'] = '^' + p.version;
p.main = 'lib';
p.scripts = p.devDependencies=undefined;

module.exports = p;