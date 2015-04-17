'use strict';

require( 'angular-ui-router' );
require( 'bootstrap-webpack' );
require( 'jquery' );
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
require( './pages/template-service/editor' );
require( './styles.css' );
require( 'script!../bower_components/textAngular/dist/textAngular-sanitize.min.js' );
require( 'script!../bower_components/textAngular/dist/textAngular-rangy.min.js' );
require( 'script!../bower_components/textAngular/dist/textAngular.min.js' );
require( '../bower_components/textAngular/src/textAngular.css' );
require( '../bower_components/font-awesome/css/font-awesome.css' );
require( 'hogan.js' );

angular.element(document).ready(function() {
	var deps = [
		'ui.router',
		'ngFileUpload',
		'app.email',
		'app.file',
		'app.template',
		'app.template.editor',
		'app.email.inbox',
		'app.email.compose',
		'app.email.draft',
		'app.email.trash',
		'app.email.sent'
	];

	angular.module('app', deps)
		.config([
			'$stateProvider', '$urlRouterProvider', '$locationProvider',
			function($stateProvider, $urlRouterProvider, $locationProvider) {
				$urlRouterProvider.otherwise('/');
				$locationProvider.html5Mode(true);

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
						.state('create', {
							url: '/template/:mode',
							templateUrl: 'template.editor.html',
							controller: 'TemplateEditorController',
							controllerAs: 'vm'
						})
						.state( 'edit', {
							url: '/template/:id/edit',
							templateUrl: 'template.editor.html',
							controller: 'TemplateEditorController',
							controllerAs: 'vm'
						})
						.state( 'view', {
							url: '/template/:id/:mode',
							templateUrl: 'template.editor.viewer.html',
							controller: 'TemplateEditorController',
							controllerAs: 'vm'
						});
			}
		]);

	angular.bootstrap(document, ['app']);
});
