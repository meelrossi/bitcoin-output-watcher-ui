angular.module('app-bootstrap').service('transactionService', [
  '$http', 'Utxos', 'Address', 'Transaction',
  function ($http, Utxos, Address, Transaction) {
    const insightApi = '//insight.bitpay.com/api';

    return {
      getAddressInfo: (address) => {
        return $http({ method: 'GET', url: `${ insightApi }/addr/${ address }` })
                .then(Address.apiResponseTransformer.bind(Address));
      },

      getUTXOSFromAddress: (address) => {
        return $http({ method: 'GET', url: `${ insightApi }/addr/${ address }/utxo` })
                .then(Utxos.apiResponseTransformer.bind(Utxos));
      },

      getTransactionFromId: (id) => {
        return $http({ method: 'GET', url: `${ insightApi }/tx/${ id }` })
                .then(Transaction.apiResponseTransformer.bind(Transaction));
      }
    };
  }
]);
