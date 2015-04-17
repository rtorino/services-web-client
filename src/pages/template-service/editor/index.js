'use strict';

var TemplateEditorController = require( './template.editor.controller.js' );

require( 'ng-cache!./template.editor.html' );
require( 'ng-cache!./template.editor.viewer.html' );

module.exports = angular.module( 'app.template.editor', [ 'textAngular' ] )
	.controller( 'TemplateEditorController', TemplateEditorController );
