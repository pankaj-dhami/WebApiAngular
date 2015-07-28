(function () {
    var MainController = function ($scope, $interval, $location) {
      
        $scope.username = 'angular';
        $scope.countdown = 5;
        var countDownInterval = null;
        var startCountDown = function () {
            countDownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
        };
        var decrementCountdown = function () {

            $scope.countdown -= 1;
            if ($scope.countdown < 1) {
                $scope.search($scope.username);
            }
        };

        $scope.search = function (username) {
         
            if (countDownInterval) {
                $interval.cancel(countDownInterval);
                $scope.countdown = null;
            }
            $location.path("/user/" + username);
        };
        startCountDown();


    };
    var app = angular.module('AngularApp')
    app.controller('MainController', ['$scope', '$interval', '$location', MainController]);


}());

