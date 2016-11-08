angular.module('app-bootstrap').run([
  '$rootScope',
  function ($rootScope) {
    $rootScope.filters = ['Transactions grater 1B', 'Push data', 'Big fee', 'Opción 4'];
  }
]);
