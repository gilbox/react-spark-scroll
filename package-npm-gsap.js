var p = require('./package');

p.name = 'react-spark-scroll-gsap';
p.dependencies.gsap = p.devDependencies.gsap;
p.dependencies['react-spark-scroll'] = '^' + p.version;
p.main = 'lib';
p.scripts = p.devDependencies=undefined;

module.exports = p;