angular.module('app-bootstrap').factory('Address', [
  'AbstractModel',
  function (AbstractModel) {

    class Address extends AbstractModel {
      constructor (data) {
        super(data);
      }
    }

    return Address;
  }
]);
