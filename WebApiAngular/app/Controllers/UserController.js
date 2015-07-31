(function () {


    var myCtrl = function ($scope,$http, myService, $routeParams) {
     
        $scope.username = $routeParams.username;
        $scope.repoSortOrder = '-stargazers_count';
       
        var onError = function () {
            $scope.error = 'could not fetch data.';
           
        };

        var onUserComplete = function (response) {
            $scope.user = response.data;
            myService.getRepos($scope.user)
                .then(onRepos, onError);

        };

        var onRepos = function (response) {
            $scope.repos = response.data;
           
            //$location.hash('userDetails');
            //$anchorScroll();
        };
         myService.getUser($scope.username).then(onUserComplete, onerror);
       // $http.get('https://api.github.com/users/' + $scope.username).then(onUserComplete, onerror);

    };
    var app = angular.module('AngularApp')
    app.controller('UserController', ['$scope', '$http', 'myService', '$routeParams', myCtrl]);


}());
