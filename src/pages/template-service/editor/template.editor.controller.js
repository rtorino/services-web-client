'use strict';

var TemplateEditorController = function ( $state, $scope, TemplateServices, $stateParams, $sce ) {
	var vm = this;
	vm.greeting = 'Manage templates.';


	$scope.mode = $stateParams.mode || 'edit';

	console.log( $scope.mode )

	$scope.templateDetails = {
			name : '',
			description : '',
			content : ''
		};

	$scope.createNewTemplate = function () {
		/*TemplateServices.createTemplate( $scope.templateDetails ).then( function () {
			$state.go( 'template' );
		} );*/

		TemplateServices.createTemplate( $scope.templateDetails );
		$state.go( 'template' );
	};

	$scope.updateTemplate = function () {
		/*TemplateServices.updateTemplate( $stateParams.id, $scope.templateDetails ).then( function () {
			$state.go( 'template' );
		} );*/

		TemplateServices.updateTemplate( $stateParams.id, $scope.templateDetails )
		$state.go( 'template' );
	};

	if( $scope.mode === 'create' ) {
		vm.greeting = 'Manage templates.';

		$scope.editorMode = 'Create New template';

	} else if ( $scope.mode === 'edit' ) {
		$scope.editorMode = 'Edit template';
		/*TemplateServices.getTemplateById( $stateParams.id ).then( function ( templateDetails ) {
			$scope.templateDetails = templateDetails;
		} );*/
		var templateDetails = TemplateServices.getTemplateById( $stateParams.id );

		$scope.templateDetails = templateDetails[ 0 ];

	} else if ( $scope.mode === 'view' ) {

		$scope.editorMode = 'View template';
		var templateDetails = TemplateServices.getTemplateById( $stateParams.id );

		var compiled = hogan.compile( templateDetails[ 0 ].content );

		$scope.$watchCollection( '[ name, company, product, expiryDate ]', function () {
			$scope.templateDetails = $sce.trustAsHtml( compiled.render( $scope ) );
		} )

		$scope.templateId = templateDetails[ 0 ].id;
	}

};

module.exports = TemplateEditorController;
