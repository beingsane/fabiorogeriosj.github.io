var app = angular.module('fabiorogeriosj', []);

app.run(function($rootScope) {
    $rootScope.exibirProfile=false;
    $rootScope.mostrarProfile = function(){
    	$rootScope.exibirProfile=!$rootScope.exibirProfile;
    };
    $rootScope.go = function(link){
    	location.href=link;
    }
    $rootScope.goHome = function(){
    	location.href="/";
    }
});

app.controller('indexController', function($scope, $http) {
    
	//Codigo aqui

	// $http.get('js/posts.json').success(function(data){
	// 	console.log(data);
	// });

	$scope.posts = posts;

});

app.controller('categoriaController', function($scope, $http) {
	$scope.categoria = location.hash.split("#/")[1];
	$scope.posts = posts;
});

app.controller('postController', function($scope, $http) {
	$scope.posts = posts;
	$scope.post = {};
	$scope.postKey = "";
	for(i in location.pathname.split("/")){
		if(location.pathname.split("/")[i].indexOf(".html")){
			$scope.postKey = location.pathname.split("/")[i];
		}
	}
	for(i in $scope.posts){
		if($scope.postKey == $scope.posts[i].link){
			$scope.post = $scope.posts[i];
		}
	}
});