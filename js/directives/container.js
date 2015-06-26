angular.module('app').
    directive('container', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: {
                index: '=index'
            },
            templateUrl: 'templates/container.html'
        };
    });
