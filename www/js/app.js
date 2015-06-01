angular.module('explorer', ['ionic', 'explorer.product', 'wakanda'])

    .run(function ($ionicPlatform, $rootScope) {

        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/products');
    });
