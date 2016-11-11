angular.module('app-bootstrap').controller('SubscribeController', [
  'transactionService', '$state',
  function (transactionService, $state) {

    this.outputType = 'address';
    this.outputs = [];
    this.subscribe = () => {
    };

    this.resetCurrentOutput = () => {
      this.currentOutput = '';
      this.outputs = [];
    };

    this.cancel = () => {
      $state.go('index.transactions');
    };

    this.getOutputs = () => {
      if (!this.currentOutput) {
        return;
      }
      this.progressActivated = true;
      if (this.outputType === 'address') {
        transactionService.getUTXOSFromAddress(this.currentOutput)
          .then((utxos) => {
            this.progressActivated = false;
            this.outputs = utxos.outputs;
          })
          .catch(() => {
            this.progressActivated = false;
          });
      } else if (this.outputType === 'transactionID') {
        transactionService.getTransactionFromId(this.currentOutput)
          .then((transaction) => {
            this.progressActivated = false;
            this.outputs = transaction.outputs;
          })
          .catch(() => {
            this.progressActivated = false;
          });
      }
    };
  }
]);
