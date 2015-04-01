'use strict';

var SentController = require('./sent.controller.js');

require('ng-cache!./sent.html');

module.exports = angular.module('app.email.sent', [] )
	.controller( 'SentController', SentController );