angular.module('app-bootstrap').controller('SubscribeController', [
  'transactionService', '$state', 'watcherService', 'angular-growl',
  function (transactionService, $state, watcherService, growl) {

    this.outputType = 'address';
    this.outputs = [];
    this.subscribe = () => {
      if (this.mail !== this.mailConfirmation) {
        growl.addErrorMessage('Los mails no coinciden');
        return;
      }
      _.forEach(_.filter(this.outputs, (output) => output.selected), (output) => {
        const data = {
          txid: output.txid,
          output: output.number,
          mail: this.mail
        };
        watcherService.watch(data)
          .then(() => {
            growl.addSuccessMessage('Esta subscripto a el output ' + output.number + 'de ' + output.txid);
          })
          .catch(() => {
            growl.addErrorMessage('No se ha podido subscribir a el output ' + output.number + 'de ' + output.txid);
          });
      });
      $state.go('index.transactions');
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
            this.outputs = _.filter(transaction.outputs, (output) => !output.spentTxId);
          })
          .catch(() => {
            this.progressActivated = false;
          });
      }
    };
  }
]);
