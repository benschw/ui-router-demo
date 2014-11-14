'use strict';

angular
  .module('app.settings.details', [
    'ui.router',
    "app.settings"
  ])
  .config(['$stateProvider', function($stateProvider) {

      var details = {
          name: 'app.settings.details',
          url: '/',
          views: {
            '': {
              templateUrl: 'scripts/settings/details/details.html',
              controller: 'SettingsController'
            }
          }
      };

      $stateProvider.state(details);

  }]);
