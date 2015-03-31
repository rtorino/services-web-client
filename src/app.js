'use strict';

require('angular-ui-router');
require( './pages/email-service' );
require( './pages/file-service' );
require( './pages/template-service' );

angular.element(document).ready(function() {
	var deps = [
		'ui.router',
		'app.email',
		'app.file',
		'app.template'
	];

	angular.module('app', deps)
		.config([
			'$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise('/');

				$stateProvider
					.state('email', {
						url: '/',
						templateUrl: 'email.html',
						controller :'EmailController',
						controllerAs : 'vm'
					})
					.state('file', {
						url: '/file',
						templateUrl: 'file.html',
						controller :'FileController',
						controllerAs : 'vm'
					})
					.state('template', {
						url: '/template',
						templateUrl: 'template.html',
						controller :'TemplateController',
						controllerAs : 'vm'
					})
			}
		]);

	angular.bootstrap(document, ['app']);
});