angular.module('app-bootstrap').run([
  '$rootScope',
  function ($rootScope) {
    $rootScope.filters = [
      {
        name: '10B A 50B',
        color: '#FFFFE5',
        filter: (transaction) => transaction.valueOut >= 10 && transaction.valueOut < 50
      },
      {
        name: '10B A 100B',
        color: '#FFFFE5',
        filter: (transaction) => transaction.valueOut >= 50 && transaction.valueOut < 100
      },
      {
        name: 'MAYORES A 100B',
        color: '#FFFFE5',
        filter: (transaction) => transaction.valueOut >= 100
      }
    ];
  }
]);
