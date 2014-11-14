'use strict';

angular
  .module('app.settings', [
    'ngResource',
    'ngRoute',
    'ui.router'
  ])
  .config(['$stateProvider', function($stateProvider) {

      var settings = {
          name: 'app.settings',
          abstract: true,
          url: '/settings',
          views: {
            '@': {
              templateUrl: 'scripts/settings/settings.html',
            }
          }
      };

      $stateProvider.state(settings);

  }])
  .controller('SettingsController', ['$scope', function ($scope) {
    $scope.user = {
      name: "Bob Loblaw",
      email: "bobloblaw@lawblog.com",
      quotes: "Lorem ipsum dolor sic amet"
    };
  }]);
