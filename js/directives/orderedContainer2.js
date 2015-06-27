angular.module('transcludeOrderedApp').
    directive('orderedContainer2', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'templates/orderedContainer2.html',
            controller: 'transcludeOrderCtrl',
            link: function(scope, element) {
                scope.link(element);
            }
        };
    });
