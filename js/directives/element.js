angular.module('transcludeOrderedApp').
    directive('element', function() {
       return {
           restrict: 'E',
           replace: true,
           scope: {
               content: '=content'
           },
           templateUrl: 'templates/element.html'
       };
    });
