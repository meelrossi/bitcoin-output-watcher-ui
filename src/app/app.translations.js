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
      SEARCH: 'Buscar',
      FILTER: {
        TITLE: 'FILTROS',
        OPTION1: 'Opcion 1',
        OPTION2: 'Opcion 2',
        OPTION3: 'Opcion 3',
        OPTION4: 'Opcion 4'
      },
      SUBSCRIBE: 'SUBSCRIBIRSE'
    });
    $translateProvider.preferredLanguage('es');
    $translateProvider.useSanitizeValueStrategy(null);
  }
]);
