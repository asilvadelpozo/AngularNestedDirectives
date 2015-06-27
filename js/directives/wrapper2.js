angular.module('transcludeOrderedApp').
    directive('wrapper2', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'templates/wrapper2.html',
            controller: 'transcludeOrderCtrl',
            link: function(scope, element) {
                scope.link(element);
            }
        };
    });
