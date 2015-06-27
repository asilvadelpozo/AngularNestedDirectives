angular.module('transcludeOrderedApp').
    directive('container', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'templates/container.html'
        };
    });
