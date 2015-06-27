angular.module('transcludeOrderedApp').
    directive('wrapper', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'templates/wrapper.html',
            controller: 'transcludeOrderCtrl',
            link: function(scope, element) {
                scope.link(element);
            }
        };
    });
