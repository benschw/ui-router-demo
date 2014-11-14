'use strict';

angular
  .module('app.settings.quotes', [
    'ngResource',
    'ngRoute',
    'ui.router',
    "app.settings"
  ])
  .config(['$stateProvider', function($stateProvider) {

      var quotes = {
          name: 'app.settings.quotes',
          url: '/quotes',
          views: {
            '': {
              templateUrl: 'scripts/settings/quotes/quotes.html',
              controller: 'SettingsController'
            }
          }
      };

      $stateProvider.state(quotes);

  }]);
