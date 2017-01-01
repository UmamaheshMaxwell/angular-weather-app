//Routes
weatherApp.config(["$routeProvider", function($routeProvider){

	$routeProvider
		.when("/",{
			controller : "HomeController",
			templateUrl: "pages/home.html"
		})
		.when("/forecast",{
			controller: "ForecastController",
			templateUrl: "pages/forecast.html"
		})
		.when("/forecast/:days",{
			controller: "ForecastController",
			templateUrl: "pages/forecast.html"
		})

}])
