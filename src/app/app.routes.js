angular.module('app-bootstrap').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('index.state1');
    });

    // Now set up the states
    $stateProvider
      .state('index', {
        abstract: true,
        views: {
          main: {
            templateUrl: '../app/components/index.html'
          }
        }
      })
      .state('index.state1', {
        url: '/transactions',
        views: {
          content: {
            templateUrl: '../app/components/component1/component1.html',
            controller: 'Component1Controller',
            controllerAs: 'comp1Ctrl'
          }
        }
      })
      .state('index.subscribe', {
        url: '/subscribe',
        views: {
          content: {
            templateUrl: '../app/components/subscribe/subscribe.html',
            controller: 'SubscribeController',
            controllerAs: 'subsCtrl'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
