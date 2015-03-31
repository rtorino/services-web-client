'use strict';

var TemplateController = require('./template.controller.js');

require('ng-cache!./template.html');


module.exports = angular.module('app.template', [] )
	.controller( 'TemplateController', TemplateController );