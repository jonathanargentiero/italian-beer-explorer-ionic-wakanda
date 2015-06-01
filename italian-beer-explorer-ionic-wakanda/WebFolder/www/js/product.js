angular.module('explorer.product', ['wakanda'])

    .config(function ($stateProvider) {

        $stateProvider

            .state('products', {
                url: "/products",
                templateUrl: "templates/product-list.html",
                controller: "ProductListCtrl"
            })

            .state('product-detail', {
                url: "/product/:ID/:name",
                templateUrl: "templates/product-detail.html",
                controller: "ProductDetailCtrl"
            })

    })

    .controller('ProductListCtrl', function ($scope, $rootScope, $ionicScrollDelegate, $wakanda) {
        var pageSize = 20,
            page = 1,
            range = [0,15];

        $wakanda.init().then(function oninit(ds) {

            $scope.products = ds.Beer.$find({
                filter : 'alcohol >= :1 AND alcohol <= :2',
                params : [
                    parseFloat(range[0]),
                    parseFloat(range[1])
                ],
                orderBy: 'position asc',
                pageSize: pageSize
            });

            $scope.productCache = false;

            $scope.clearSearch = function() {
                $scope.searchKey = "";
                $scope.loadData();
            };

            $rootScope.$on('searchKeyChange', function(event, searchKey) {
                $scope.searchKey = searchKey;
                $scope.loadData();
            });

            $scope.formatAlcoholLevel = function(val) {
                return parseFloat(val);
            };

            $scope.loadData = function() {
                var searchString = ($scope.searchKey && $scope.searchKey.length > 0) ? '*'+$scope.searchKey+'*' : '*';
                range = $slider.val();
                $scope.products = ds.Beer.$find({
                    filter : 'name == :1 OR tags == :1 AND alcohol >= :2 AND alcohol <= :3',
                    params : [
                        searchString,
                        parseFloat(range[0]),
                        parseFloat(range[1])
                    ],
                    orderBy: 'position asc',
                    pageSize: pageSize
                });
                $scope.products.$promise.then(function(){
                    $ionicScrollDelegate.$getByHandle('myScroll').getScrollView().scrollTo(0, 0, true);
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                });

            };

            $scope.loadMoreData = function() {
                $scope.products.$more().then(function(){
                    page ++;
                    $scope.$broadcast('scroll.infiniteScrollComplete');
                });
            };

            $scope.isMoreData = function() {
                return (page*pageSize <= $scope.products.$totalCount) ? true : false;
            };

            var $slider = $("#slider");
            $slider.noUiSlider({
                start: [ range[0], range[1] ],
                connect: true,
                step: 0.5,
                range: {
                    'min': range[0],
                    'max': range[1]
                }
            });
            $slider.Link('lower').to('-inline-<div class="tooltip"></div>', function ( value ) {
                $(this).html(
                    '<span>' + value.substr(0, value.length - 1) + '</span>'
                );
            });
            $slider.Link('upper').to('-inline-<div class="tooltip"></div>', function ( value ) {
                $(this).html(
                    '<span>' + value.substr(0, value.length - 1) + '</span>'
                );
            });
            $slider.on({change: $scope.loadData});
        });

    })

    .controller('ProductDetailCtrl', function ($scope, $rootScope, $state, $stateParams, $wakanda) {

        
        $wakanda.init().then(function oninit(ds) {

            var beer = ds.Beer.$findOne($stateParams.ID);
            beer.$promise.then(function(data){
                $scope.product = data.result;
                $scope.tags = $scope.product.tags.split(', ');
            });
        });

        $scope.setSearchKey = function(searchKey) {
            $rootScope.$emit('searchKeyChange', searchKey);
            $state.go('products');
        };

        $scope.formatAlcoholLevel = function(val) {
            return "" + parseFloat(val) + "%";
        };
    });
