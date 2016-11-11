angular.module('app-bootstrap').directive('filterColor', [
  function () {
    return {
      scope: {
        colors: '=',
        transaction: '='
      },
      link: (scope, elem) => {
        scope.elem = elem;
        _.forEach(scope.colors, (color) => {
          if (color.filter(scope.transaction)) {
            scope.elem.parent().parent().css('background-color', color.color);
          }
        })
      }
    };
  }
]);
