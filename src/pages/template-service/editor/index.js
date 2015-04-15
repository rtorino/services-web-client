'use strict';

var TemplateEditorController = require( './template.editor.controller.js' );

require( 'ng-cache!./template.editor.html' );

module.exports = angular.module( 'app.template.editor', [] )
	.controller( 'TemplateEditorController', TemplateEditorController );
