'use strict';

/**
 * @ngdoc overview
 * @name demoApp
 * @description
 * # demoApp
 *
 * Main module of the application.
 */
angular
  .module('demoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
    'ui.bootstrap',
    'app.home',
    'app.settings',
    'app.settings.details',
    'app.settings.quotes'
  ])
  .run(['$rootScope', '$state', '$stateParams',
    function ($rootScope, $state, $stateParams) {
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
  }])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
    $urlRouterProvider.otherwise('/');

    var app = {
      name: 'app',
      abstract: true,
      url: '',
      views: {
        'header': {
          templateUrl: 'scripts/views/header.html',
        },
        // '': {}, // skip in root state
        'footer': {
          templateUrl: 'scripts/views/footer.html'
        }          }
    };

      $stateProvider.state(app);

  }]);
