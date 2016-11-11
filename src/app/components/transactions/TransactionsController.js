angular.module('app-bootstrap').controller('TransactionsController', [
  'Transaction', 'socket',
  function (Transaction, socket) {

    this.liveTrans = [];
    this.play = true;

    this.togglePlay = () => {
      this.play = !this.play;
    };

    socket.on('connect', function() {
      socket.emit('subscribe', 'inv');
    });

    socket.on('tx', (data) => {
      if (this.play) {
        this.liveTrans.unshift(Transaction.apiResponseTransformer({ data }));
        this.liveTrans = this.liveTrans.slice(0, 15);
      }
    });
  }
]);
