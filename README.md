## Multiple Transclude Angular Nested Directives 

The default behaviour of ng-transclude in AngularJS only allows to nest all the content together where ng-transclude is set on the template.

There is no possibility to transclude different elements independently and order them as desired.

This project tries to solve this problem by the use of an AngularJS controller (transcludeOrderController.js). This controller together with some definition of custom directives allows the use of multiple ordered nested directives.

## Terminology

1. **Nested directives**: these are 'normal' directives that you want to nest on others.
1. **Wrapper directive**: this is the directive that includes the nested directives. Here is where all the magic happens.
1. **data-order**: the order in which you define your *nested directives* inside your *wrapper directive* on the html code.
1. **data-transclude-order**: The order in which your *nested directives* will be injected in the template of your *wrapper*.

## How to use it

Steps:

* Use transcludeOrderController.js as a template for your controller. You should only change the module name and use yours.
* Create some *nested directive* that you can use inside the *wrapper*. For example:
```javascript
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
```
And its template could be:
```html
<section class="nested">
     nested
</section>
```
* Create a custom *wrapper directive* that use your new controller. For example:
```javascript
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
```
And its template could be:
```html
<div class="wrapper">
     <div data-transclude-order="1"></div>
     <div data-transclude-order="2"></div>
     <div data-transclude-order="3"></div>
</div>
```
* Use both *nested* and *wrapper* on your html code. For example:
```html
<wrapper>
     <nested data-order="1"></nested>
     <nested data-order="2"></nested>
     <nested data-order="3"></nested>
</wrapper>
```

## Workspace Setup

run: 

`sudo npm install`

## Start Example Application

run:

`gulp`

This will start index.html file on the browser. This file contains several examples of use.
