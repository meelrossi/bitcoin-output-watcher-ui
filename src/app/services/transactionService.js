angular.module('app-bootstrap').service('transactionService', [
  '$http', 'Utxos', 'Address', 'Transaction',
  function ($http, Utxos, Address, Transaction) {
    const insightApi = '//blockchain.info/es';

    return {
      getAddressInfo: (address) => {
        return $http({ method: 'GET', url: `${ insightApi }/address/${ address }`, params: {cors: true}})
                .then(Address.apiResponseTransformer.bind(Address));
      },

      getUTXOSFromAddress: (address) => {
        return $http({ method: 'GET', url: `${ insightApi }/unspent`, params: {active: address, cors: true}})
                .then(Utxos.apiResponseTransformer.bind(Utxos));
      },

      getTransactionFromId: (id) => {
        return $http({ method: 'GET', url: `${ insightApi }/rawtx/${ id }`, params: {cors: true}})
                .then(Transaction.apiResponseTransformer.bind(Transaction));
      }
    };
  }
]);
