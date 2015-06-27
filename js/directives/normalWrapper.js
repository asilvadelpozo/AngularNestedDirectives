angular.module('transcludeOrderedApp').
    directive('normalWrapper', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'templates/normalWrapper.html'
        };
    });
