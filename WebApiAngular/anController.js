(function () {
    var anController = function ($scope) {

        $scope.username = 'angular';
        $scope.countdown = 5;
     
        $scope.search = function (username) {

           
        };

        $scope.addNewEmployee = function () {
           
        };

    };
    var app = angular.module('angDemo', []);
    app.controller('anController', anController);


}());