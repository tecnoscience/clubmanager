'use strict';
var async = require('async');
var index = require('../app/controllers/index');
module.exports = function(app) {
  app.get('/', index.render);
};