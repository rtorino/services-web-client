var deps = [];

module.exports =  angular.module( 'app.home', deps )
.directive( 'homePage', function () {
	return {
		restrict : 'E',
		scope : {},
		template: require( './home.html' ),
		controller : require( './home.controller.js' )
		controllerAs : 'vm'
	};
} );

// module.exports = homeModule;