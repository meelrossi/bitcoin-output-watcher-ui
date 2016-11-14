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
        return this.value / 100000000;
      }

      get number () {
        return angular.isDefined(this.tx_output_n) ? this.tx_output_n : this.n;
      }
    }

    return Output;
  }
]);
