angular.module('app-bootstrap').factory('socket', [
  '$rootScope',
  function ($rootScope) {
    const socket = io.connect('https://insight.bitpay.com');
    return {
      on: (eventName, callback) => {
        socket.on(eventName, function () {
          const args = arguments;
          $rootScope.$apply(function () {
            callback.apply(socket, args);
          });
        });
      },
      emit: (eventName, data, callback) => {
        socket.emit(eventName, data, function () {
          const args = arguments;
          $rootScope.$apply(function () {
            if (callback) {
              callback.apply(socket, args);
            }
          });
        });
      }
    };
  }]);
