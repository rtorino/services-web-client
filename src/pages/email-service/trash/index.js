'use strict';

var TrashController = require('./trash.controller.js');

require('ng-cache!./trash.html');

module.exports = angular.module('app.email.trash', [] )
	.controller( 'TrashController', TrashController );