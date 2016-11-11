angular.module('app-bootstrap').factory('Address', [
  'AbstractModel',
  function (AbstractModel) {

    class Address extends AbstractModel {
      constructor (output) {
        super(output);
      }
    }

    return Address;
  }
]);
