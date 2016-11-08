angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      SUBSCRIBE: {
        TITLE: 'SUBSCRIPCIÓN',
        ACCEPT: 'SUBSCRIBIRSE',
        CANCEL: 'CANCEL'
      }
    });
  }
]);
