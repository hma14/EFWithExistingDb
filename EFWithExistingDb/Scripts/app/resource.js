'use restrict';

var apiServices = angular.module('apiServices', ['ngResource']);

apiServices.factory('Product', ['$resource', function($resource) {
    return $resource('api/Products/:id', {}, {
        query: { method: "GET", isArray: true },
        create: { method: "POST" },
        get: { method: "GET", url: "api/Products?id=:id" },
        remove: { method: "DELETE", url: "api/Products?id:id" },
        update: { method: "PUT", url: "api/Products?id:id" }
    })
}]);

apiServices.factory('Category', ['$resource', function ($resource) {
    return $resource('api/Categories/:id', {}, {
        query: { method: "GET", isArray: true },
        create: { method: "POST" },
        get: { method: "GET", url: "api/Categories?id=:id" },
        remove: { method: "DELETE", url: "api/Categories?id:id" },
        update: { method: "PUT", url: "api/Categories?id:id" }
    })
}]);