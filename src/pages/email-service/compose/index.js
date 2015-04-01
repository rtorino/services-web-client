'use strict';

var ComposeController = require('./compose.controller.js');

require('ng-cache!./compose.html');

module.exports = angular.module('app.email.compose', [] )
	.controller( 'ComposeController', ComposeController );