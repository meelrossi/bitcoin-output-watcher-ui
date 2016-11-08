angular.module('app-bootstrap').controller('SubscribeController', [
  '$http',
  function ($http) {

    this.outputType = 'address';
    this.outputs = [];

    this.addOuput = () => {
      console.log('dakshakjhdlajhd');
      this.outputs.push(this.currentOutput);
      this.currentOutput = '';
    };

    this.subscribe = () => {
    };

    this.getOutputs = () => {
      $http({
        method: 'GET',
        url: `//test-insight.bitpay.com/api/addr/${this.currentOutput}/utxo`
      }).then(function successCallback(response) {
          console.log(response);
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    }
  }
]);
