angular.module('transcludeOrderedApp').
    controller('transcludeOrderCtrl', function($scope, $compile, $transclude) {

        $scope.transcludeOrderAttribute = 'data-transclude-order';
        $scope.orderAttribute = 'data-order';
        $scope.transcludes = {};

        $scope.findChild = function(childrenList, query, value) {
            var children = null,
                i;
            for (i = 0; i < childrenList.length; i++) {
                if(childrenList[i].attributes.getNamedItem(query) && childrenList[i].attributes.getNamedItem(query).nodeValue == value) {
                    return childrenList[i];
                }
            }
            return children;
        };

        $scope.link = function(element) {
            for (var key in $scope.transcludes) {
                if ($scope.transcludes.hasOwnProperty(key)) {
                    angular.element($scope.findChild(element[0].children, $scope.transcludeOrderAttribute, parseInt(key))).replaceWith($scope.transcludes[parseInt(key)]);
                }
            }
        };

        $transclude(function(clone, $scope) {
            var children = [];
            for (var i = 0; i < clone.length; i++) {
                if(clone[i] == '[object HTMLElement]') {
                    children.push(clone[i]);
                }
            }
            for (var i = 0; i < children.length; i++) {
                $scope.transcludes[(i + 1)] = $compile($scope.findChild(children, $scope.orderAttribute, (i + 1)))($scope);
            }
        });
    });
