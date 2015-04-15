'use strict';

var TemplateEditorController = function ( $scope ) {
	var vm = this;
	vm.greeting = 'Manage templates.';
	$scope.editorMode = 'Create New template'
};

module.exports = TemplateEditorController;
