// Controller
weatherApp.controller("HomeController", ["$scope", "CityService", function($scope, CityService){
	$scope.city = CityService.city;

	$scope.$watch('city', function(){
		CityService.city = $scope.city;
	})
}])

weatherApp.controller("ForecastController", ["$scope", "$resource", "$routeParams", "CityService", function($scope, $resource, $routeParams, CityService){
	$scope.city = CityService.city;
	$scope.days = $routeParams.days || '2';

	$scope.weatherAI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily");

    
	$scope.weatherResult= $scope.weatherAI
								.get({
									q : $scope.city,
									cnt: $scope.days,
									appid: "837f4f14a1346dc5486efe55e7de9285"
								})

	$scope.convertToFahrenheit = function(degK){
		return Math.round((1.8 * (degK -273)) + 32);
	}
	
	$scope.convertToDate = function(date){
		return new Date(date * 1000);
	}

}]);