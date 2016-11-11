angular.module('app-bootstrap').config([
  '$translateProvider',
  function ($translateProvider) {

    $translateProvider.translations('es', {
      DAYS_OF_WEEK: {
        SUNDAY: 'Domingo',
        MONDAY: 'Lunes',
        TUESDAY: 'Martes',
        WEDNESDAY: 'Miércoles',
        THURSDAY: 'Jueves',
        FRIDAY: 'Viernes',
        SATURDAY: 'Sabado'
      },
      TITLE: 'BitWatch',
      SEARCH: 'BUSCAR TRANSACCIÓN',
      FILTER: {
        TITLE: 'COLORES TRANSACCIONES'
      },
      SUBSCRIBE: 'SUBSCRIBIRSE'
    });
    $translateProvider.preferredLanguage('es');
    $translateProvider.useSanitizeValueStrategy(null);
  }
]);
