angular.module('app-bootstrap').config([
  '$stateProvider', '$urlRouterProvider', '$locationProvider',
  function ($stateProvider, $urlRouterProvider, $locationProvider) {

    // For any unmatched urls
    $urlRouterProvider.otherwise(($injector) => {
      $injector.get('$state').go('index.transactions');
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
      .state('index.transactions', {
        url: '/transactions',
        views: {
          content: {
            templateUrl: '../app/components/transactions/transactions.html',
            controller: 'TransactionsController',
            controllerAs: 'transactionsCtrl'
          }
        }
      })
      .state('index.show', {
        url: '/transactions/{txid:string}',
        views: {
          content: {
            templateUrl: '../app/components/showTransaction/showTransaction.html',
            controller: 'ShowTransactionController',
            controllerAs: 'showCtrl'
          }
        }
      })
      .state('index.subscribe', {
        url: '/subscribe',
        views: {
          content: {
            templateUrl: '../app/components/subscribe/subscribe.html',
            controller: 'SubscribeController',
            controllerAs: 'subscribeCtrl'
          }
        }
      });

    $locationProvider.html5Mode(true);
  }
]);
