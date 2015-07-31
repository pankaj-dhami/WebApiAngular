/// <reference path="Views/Main.html" />
(function () {

    var app = angular.module('AngularApp', ["ngRoute", 'ngProgressLite']);
    app.config(['ngProgressLiteProvider', function (ngProgressLiteProvider) {
        ngProgressLiteProvider.settings.ease = 'ease-in';
    }]);
    app.config(function ($routeProvider) {
        $routeProvider.when("/main", {
            templateUrl: "/app/Views/Main.html",
            controller: "MainController"
        }).when("/user/:username", {
            templateUrl: "/app/Views/UserDetails.html",
            controller: "UserController"
        }).when("/newEmployeeForm", {
            templateUrl: "/app/Views/efTemplate.html",
            controller: "efController"
        })

            .otherwise({ redirectTo: "/main" });

    });

}());