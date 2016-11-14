angular.module('app-bootstrap').factory('Transaction', [
  'AbstractModel', 'Output',
  function (AbstractModel, Output) {

    class Transaction extends AbstractModel {
      constructor (transaction) {
        super(transaction.data);
        this.outputs = Output.apiResponseTransformer(this.out);
        _.forEach(this.outputs, (output) => {
          output.txid = this.hash;
        });
      }

      get satoshis () {
        return this.valueOut * 100000000;
      }
    }

    return Transaction;
  }
]);
