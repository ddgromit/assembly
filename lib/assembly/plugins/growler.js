var growl = require('growl'),
    _ = require('underscore');

var Growler = exports;

Growler.attach = function (options) {
  var manager = this;

  var throttledGrowl = _.throttle(growl, 1000);

  manager.on('compile_error', function(err, src, options) {
    var filename = src.replace(/^.*[\\\/]/, '');
    var name = err.name === undefined ? 'Compile Error' : err.name; 
    var title = filename + " " + name.toLowerCase();

    throttledGrowl(err.message, {"title": title});
  });
};