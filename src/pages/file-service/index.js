'use strict';

var FileController = require('./file.controller.js');

require('ng-cache!./file.html');
require('./file.css');


module.exports = angular.module('app.file', [] )
	.controller( 'FileController', FileController );