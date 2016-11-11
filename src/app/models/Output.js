angular.module('app-bootstrap').factory('Output', [
  'AbstractModel',
  function (AbstractModel) {

    class Output extends AbstractModel {
      constructor (output) {
        super(output);
        if (this.n) {
          this.vout = this.n;
        }
      }

      get nonSerializableAttributes () {
        return [...super.nonSerializableAttributes, 'satoshis'];
      }

      get amount () {
        return this.satoshis || 100000000 * this.value;
      }

      get number () {
        return angular.isDefined(this.vout) ? this.vout : this.n;
      }
    }

    return Output;
  }
]);
