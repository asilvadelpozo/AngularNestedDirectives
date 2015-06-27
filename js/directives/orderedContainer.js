angular.module('transcludeOrderedApp').
    directive('orderedContainer', function() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            templateUrl: 'templates/orderedContainer.html',
            controller: 'transcludeOrderCtrl',
            link: function(scope, element) {
                scope.link(element);
            }
        };
    });
