'use strict';

var InboxController = require('./inbox.controller.js');

require('ng-cache!./inbox.html');


module.exports = angular.module( 'app.email.inbox', [] )
	.controller( 'InboxController', InboxController );