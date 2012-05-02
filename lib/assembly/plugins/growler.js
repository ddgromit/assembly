var growl = require('growl')

var Growler = exports;

Growler.attach = function (options) {
  var manager = this;

  manager.on('compile_error', function(err, src, options) {
    var filename = src.replace(/^.*[\\\/]/, '');
    var name = err.name === undefined ? 'Compile Error' : err.name; 
    var title = filename + " " + name.toLowerCase();

    growl(err.message, {"title": title});
  });
};