angular.module('app-bootstrap').service('watcherService', [
  '$http',
  function ($http) {
    const watcherApi = '//bitcoin-output-watcher.herokuapp.com';

    return {
      watch: (data) => {
        return $http({ method: 'POST', url: `${ watcherApi }/watch`, data: { ...data } });
      }
    };
  }
]);
