'use strict';

require('angular-ui-router');
require("bootstrap-webpack");
require( 'script!../bower_components/angular-file-upload-binaryjs/angular-file-upload.js' );
require( 'script!../node_modules/ng-file-upload/dist/angular-file-upload.js' );
require( './pages/email-service' );
require( './pages/email-service/inbox' );
require( './pages/email-service/compose' );
require( './pages/email-service/sent' );
require( './pages/email-service/draft' );
require( './pages/email-service/trash' );
require( './pages/file-service' );
require( './pages/template-service' );
require( './styles.css');

angular.element(document).ready(function() {
	var deps = [
		'ui.router',
		'ngFileUpload',
		'app.email',
		'app.file',
		'app.template',
		'app.email.inbox',
		'app.email.compose',
		'app.email.draft',
		'app.email.trash',
		'app.email.sent'
	];

	angular.module('app', deps)
		.config([
			'$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {
				$urlRouterProvider.otherwise('/');

				$stateProvider
					.state('email', {
						url: '/home',
						templateUrl: 'email.html',
						controller :'EmailController',
						controllerAs : 'vm'
					})
						.state('email.compose', {
							url: '/compose',
							templateUrl: 'compose.html',
							controller :'ComposeController',
							controllerAs : 'vm'
						})
						.state('email.inbox', {
							url: '/inbox',
							templateUrl: 'inbox.html',
							controller :'InboxController',
							controllerAs : 'vm'
						})
						.state('email.sent', {
							url: '/sent',
							templateUrl: 'sent.html',
							controller :'SentController',
							controllerAs : 'vm'
						})
						.state('email.draft', {
							url: '/draft',
							templateUrl: 'draft.html',
							controller :'DraftController',
							controllerAs : 'vm'
						})
						.state('email.trash', {
							url: '/trash',
							templateUrl: 'trash.html',
							controller :'TrashController',
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