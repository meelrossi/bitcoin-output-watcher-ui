angular.module('app-bootstrap').factory('Transaction', [
  'AbstractModel', 'Output',
  function (AbstractModel, Output) {

    class Transaction extends AbstractModel {
      constructor (transaction) {
        super(transaction.data);
        this.outputs = Output.apiResponseTransformer(this.vout);
        _.forEach(this.outputs, (output) => {
          output.txid = this.txid;
        });
      }

      get satoshis () {
        return this.valueOut * 100000000;
      }
    }

    return Transaction;
  }
]);
