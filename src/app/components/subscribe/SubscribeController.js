angular.module('app-bootstrap').controller('SubscribeController', [
  'transactionService', '$state', 'watcherService', 'Notification',
  function (transactionService, $state, watcherService, Notification) {

    this.outputType = 'address';
    this.outputs = [];
    this.subscribe = () => {
      if (this.mail !== this.mailConfirmation) {
        Notification.error({ message: 'Los mails ingresados no coinciden', delay: 10000 });
        return;
      }
      _.forEach(_.filter(this.outputs, (output) => output.selected), (output) => {
        const data = {
          txid: output.txid,
          output: output.number,
          email: this.mail
        };
        watcherService.watch(data)
          .then(() => {
            Notification.success({ message: 'Esta subscripto a el output ' + output.number + ' de ' + output.txid, delay: 10000 });
            this.output = {};
          })
          .catch(() => {
            Notification.error({ message: 'No se ha podido subscribir a el output ' + output.number + 'de ' + output.txid, delay: 10000 });
          });
      });
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
        if (this.currentOutput.length < 32) {
          return;
        }
        transactionService.getUTXOSFromAddress(this.currentOutput)
          .then((utxos) => {
            this.progressActivated = false;
            this.outputs = utxos.outputs;
            if (this.outputs.length === 0) {
              Notification.error({ message: 'La dirección no tiene ningun output por gastar', delay: 10000 });
            }
          })
          .catch(() => {
            this.progressActivated = false;
            Notification.error({ message: 'El dirección es inválida', delay: 10000 });
          });
      } else if (this.outputType === 'transactionID') {
        if (this.currentOutput.length < 62) {
          return;
        }
        transactionService.getTransactionFromId(this.currentOutput)
          .then((transaction) => {
            this.progressActivated = false;
            this.outputs = _.filter(transaction.outputs, (output) => !output.spentTxId);
            if (this.outputs.length === 0) {
              Notification.error({ message: 'La transacción no tiene ningun output por gastar', delay: 10000 });
            }
          })
          .catch(() => {
            this.progressActivated = false;
            Notification.error({ message: 'El id de transacción es inválido', delay: 10000 });
          });
      }
    };
  }
]);
