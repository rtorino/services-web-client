'use strict';

var TemplateController = function ( $state, $scope, TemplateServices ) {
	var vm = this;
	vm.greeting = 'this greeting comes from the controller';

	$scope.templates = [];

	var templateList = TemplateServices.getTemplateList();
	/*templateList.then( function ( templates ) {
		$scope.templates = templates;
	} );*/
	$scope.templates = templateList;

	$scope.deleteTemplate = function ( id ) {
		/*var deleteTemplate = TemplateServices.deleteTemplateById( id );
		deleteTemplate.then( function ( templates ) {
			console.log( templates )
		} );*/

		Array.prototype.getIndexBy = function (name, value) {
			    for (var i = 0; i < this.length; i++) {
			        if (this[i][name] == value) {
			            return i;
			        }
			    }
			}

		var index = $scope.templates.getIndexBy( 'id', id );

		$scope.templates.splice( index, 1 );

		TemplateServices.deleteTemplateById( id );


	}
};

module.exports = TemplateController;
