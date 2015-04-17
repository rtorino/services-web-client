'use strict';

var TemplateController = require('./template.controller.js');
var TemplateServices = require( './template.services.js' );

require('ng-cache!./template.html');

module.exports = angular.module('app.template', [] )
	.controller( 'TemplateController', TemplateController )
	.service( 'TemplateServices', TemplateServices );
