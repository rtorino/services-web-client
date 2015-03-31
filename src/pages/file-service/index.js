'use strict';

var FileController = require('./file.controller.js');

require('ng-cache!./file.html');


module.exports = angular.module('app.file', [] )
	.controller( 'FileController', FileController );