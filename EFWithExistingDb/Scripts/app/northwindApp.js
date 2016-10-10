'use restrict';

var northwindApp = angular.module('northwindApp', ['ngRoute', 'apiServices']);


northwindApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider.
    when('/',
    {
        templateUrl: 'Html/product.html',
        controller: 'productController'
    }).
    when('/products',
    {
        templateUrl: 'Html/product.html',
        controller: 'productController'
    }).
    when('/categories',
    {
        templateUrl: 'Html/category.html',
        controller: 'categoryController'
    }).
    when('/categoryDetail',
    {
        templateUrl: 'Html/categoryDetail.html',
        controller: 'categoryController'
    }).
    otherwise({
        redirectTo: '/'
    })
    $locationProvider.html5Mode(true);
});

northwindApp.factory('$exceptionHandler', function ($injector) {
    return function (exception, cause) {
        var $rootScope = $injector.get('$rootScope');
        $rootScope.errors = $rootScope.errors || [];
        $rootScope.errors.push('Cause: ' + cause + ', Details: ' + exception);
        console.log($rootScope.errors);
    }
})
