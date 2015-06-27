angular.module('transcludeOrderedApp').
    directive('nested', function() {
       return {
           restrict: 'E',
           replace: true,
           scope: {
               content: '=content'
           },
           templateUrl: 'templates/nested.html'
       };
    });
