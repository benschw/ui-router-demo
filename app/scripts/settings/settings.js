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
  .controller('SettingsController', ['$scope', '$resource', function ($scope, $resource) {
    var User = $resource('stub-user.json');
    var user = User.get();
    $scope.user = user;
  }]);
