'use strict';

var DraftController = require('./draft.controller.js');

require('ng-cache!./draft.html');

module.exports = angular.module('app.email.draft', [] )
	.controller( 'DraftController', DraftController );