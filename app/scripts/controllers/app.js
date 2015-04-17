(function () {
  'use strict';

  angular
    .module('SlurpApp')
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$mdSidenav', '$log'];

  function AppCtrl($mdSidenav, $log) {
    var vm = this;

    vm.toggleSidenav = toggleSidenav;


  function toggleSidenav(name) {
    $mdSidenav(name).toggle();
  }


  }

})();
