angular.module('app-bootstrap').factory('Utxos', [
  'AbstractModel', 'Output',
  function (AbstractModel, Output) {

    class Utxos extends AbstractModel {
      constructor (output) {
        super(output);
        this.outputs = Output.apiResponseTransformer(this.data);
      }
    }
    return Utxos;
  }
]);
