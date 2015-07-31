(function () {
    var efController = function ($scope, efService, $window, $routeParams) {

        $scope.employee = efService.getEmp($routeParams.id);
        $scope.editableEmployee = angular.copy($scope.employee);

        $scope.departments = [
            "Engineering",
            "Marketing",
            "Finance",
            "Admin"

        ];
        $scope.submitForm = function () {

            if ($scope.employeeForm.$invalid) {

                return;

            }

             $window.history.back();
          
        };
        $scope.cancelForm = function () {

            $window.history.back();

        };

        $scope.shouldShowFullName = function () {

            return true;
        };

    };
    var app = angular.module("AngularApp");
    app.controller("efController", ['$scope', 'efService', '$window', '$routeParams', efController]);

}());