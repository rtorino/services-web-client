var homeController = angular.module( 'app.home' )

function HomeController() {
	var vm = this;
	vm.page = 'Welcome to homepage'
}
.controller( 'HomeController', HomeController );

module.exports = homeController;