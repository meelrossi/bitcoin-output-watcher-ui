angular.module('app-bootstrap').controller('ShowTransactionController', [
  '$stateParams', 'transactionService',
  function ($stateParams, transactionService) {

    this.transactionId = $stateParams.txid;
    transactionService.getTransactionFromId(this.transactionId)
      .then((tx)=> {
        this.transaction = tx;
      })
  }
]);
