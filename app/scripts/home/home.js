'use strict';

angular
  .module('app.home', [
    'ngResource',
    'ngRoute',
    'ui.router'
  ])
  .config(['$stateProvider', function($stateProvider) {

      var home = {
          name: 'app.home',
          url: '/',
          views: {
            '@': {
              templateUrl: 'scripts/home/home.html',
            }
          }
      };

      $stateProvider.state(home);

  }]);
