'use strict';

var EmailController = require('./email.controller.js');

require('ng-cache!./email.html');


module.exports = angular.module('app.email', [] )
	.controller( 'EmailController', EmailController );