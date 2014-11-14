"use strict";angular.module("demoApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","ui.router","ui.bootstrap","app.home","app.settings","app.settings.details","app.settings.quotes"]).run(["$rootScope","$state","$stateParams",function(a,b,c){a.$state=b,a.$stateParams=c}]).config(["$stateProvider","$urlRouterProvider",function(a,b){b.otherwise("/");var c={name:"app","abstract":!0,url:"",views:{header:{templateUrl:"scripts/views/header.html"},footer:{templateUrl:"scripts/views/footer.html"}}};a.state(c)}]),angular.module("app.home",["ngResource","ngRoute","ui.router"]).config(["$stateProvider",function(a){var b={name:"app.home",url:"/",views:{"@":{templateUrl:"scripts/home/home.html"}}};a.state(b)}]),angular.module("app.settings",["ngResource","ngRoute","ui.router"]).config(["$stateProvider",function(a){var b={name:"app.settings","abstract":!0,url:"/settings",views:{"@":{templateUrl:"scripts/settings/settings.html"}}};a.state(b)}]).controller("SettingsController",["$scope","$resource",function(a,b){var c=b("../stub-user.json"),d=c.get();a.user=d}]),angular.module("app.settings.details",["ngResource","ngRoute","ui.router","app.settings"]).config(["$stateProvider",function(a){var b={name:"app.settings.details",url:"/",views:{"":{templateUrl:"scripts/settings/details/details.html",controller:"SettingsController"}}};a.state(b)}]),angular.module("app.settings.quotes",["ngResource","ngRoute","ui.router","app.settings"]).config(["$stateProvider",function(a){var b={name:"app.settings.quotes",url:"/quotes",views:{"":{templateUrl:"scripts/settings/quotes/quotes.html",controller:"SettingsController"}}};a.state(b)}]);