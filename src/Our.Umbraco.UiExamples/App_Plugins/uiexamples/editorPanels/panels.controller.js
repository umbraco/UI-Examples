(function () {
    'use strict';

    function panelsController($scope, exampleResource) {

        var vm = this;

        vm.loading = true;

        vm.linkAway = exampleResource.linkAway;
    };

    angular.module('umbraco').controller('panelsController', panelsController);
})();