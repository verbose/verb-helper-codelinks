'use strict';

var verb = require('verb');

verb.helper('codelinks', require('./'));

verb.task('default', function () {
  return verb.src('.verb.md')
    .pipe(verb.dest('.'));
});
