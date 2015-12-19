'use restrict';

northwindApp.controller('productController',
    ['$scope', '$rootScope', '$exceptionHandler', 'Product',
    function ($scope, $rootScope, $exceptionHandler, Product) {

        $scope.products = [];
        $scope.sortField = 'ProductID';
        $scope.reverse = false;

        $scope.init = function()
        {
            var promise = Product.query();
            promise.$promise.then(function (payload) {
                $scope.products = payload;
            },
            function(error)
            {
                $exceptionHandler(error.data.InnerException.ExceptionMessage, error.status + ', ' + error.statusText);
            })
        }
    }]);