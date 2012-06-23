var fs = require('fs');
var path = require('path');
var connect = require('connect');

exports.connect = function(path) {
  path = path || '/viaduct.html';

  var connectStatic = connect.static(__dirname + '/public');

  return function(req, res, next) {
    console.log("got req for " + req.url);
    
    if (req.url !== path) {
      next();
      return;
    }

    console.log("go ahead", __dirname);
    req.url = '/viaduct.html';
    connectStatic(req, res, next);
  };
};
