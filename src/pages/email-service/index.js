'use strict';

var EmailController = require('./email.controller.js');

require('ng-cache!./email.html');
require('./email.css');


module.exports = angular.module('app.email', [] )
	.controller( 'EmailController', EmailController );