//Hash Bang Urls
weatherApp.config(["$locationProvider" ,"$sceDelegateProvider", function($locationProvider, $sceDelegateProvider){
	$locationProvider.hashPrefix('');	
	// $sceDelegateProvider.resourceUrlWhitelist([
	// 	// Allow same origin resource loads.
	// 	'self',
	// 	// Allow loading from our assets domain.  Notice the difference between * and **.
	// 	'http://api.openweathermap.org/**'

	// ]);
}]);
