'use restrict';

northwindApp.controller('categoryController',
    ['$scope', '$rootScope', '$exceptionHandler', 'Category',
    function ($scope, $rootScope, $exceptionHandler, Category) {

        $scope.categories = [];
        $scope.sortField = 'CategoryID';
        $scope.reverse = false;
        $rootScope.category = '';

        $scope.init = function () {
            var promise = Category.query();
            promise.$promise.then(function (payload) {
                $scope.categories = payload;
            },
            function (error) {
                $exceptionHandler(error.data.InnerException.ExceptionMessage, error.status + ', ' + error.statusText);
            });
        };

        $rootScope.getCategory = function (product) {
            var promise = Category.get({ id: product.CategoryID });
            promise.$promise.then(function (payload) {
                $rootScope.category = payload;
            },
            function (error) {
                if (error.data.InnerException != null) {
                    $exceptionHandler(error.data.InnerException.ExceptionMessage, error.status + ', ' + error.statusText);
                }
                else if (error.data.ExceptionMessage != null) {
                    $exceptionHandler(error.data.ExceptionMessage, error.status + ', ' + error.statusText);
                }
                else {
                    $exceptionHandler(error.data.MessageDetail, error.status + ', ' + error.statusText);
                }
            });
        };
    }]);

