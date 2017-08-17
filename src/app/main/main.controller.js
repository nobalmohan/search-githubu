(function() {
  'use strict';

  angular
    .module('belong')
    .controller('MainController', MainController)
    .filter('highlightWord', function() {
        return function(text, selectedWord) {
          if(selectedWord) {
            var pattern = new RegExp(selectedWord, "g");
            angular.forEach(text, function(value) {
              text.name = '<span class="highlighted">' + value.name + '</span>';
            });
            console.log(text.name);
            return text;
            //return text.replace(pattern, '<span class="highlighted">' + selectedWord + '</span>');
          }
          else {
            return text;
          }
        };
  });

  /** @ngInject */
  function MainController($scope, Restangular, apiService) {
    var vm = this;

    vm.searchUser = searchUser;
    vm.clearAll = clearAll;
    vm.clearResults = clearResults;

    function searchUser(data) {
      apiService.getGithubUser(data).then(function(response) {
        getGithubUserRepo(response.login);
      });
    }

    function getGithubUserRepo(username) {
      apiService.getGithubUserRepo(username).then(function(response) {
        vm.repoData= response;
      });
    }

    function clearAll() {
      $scope.usename = '';
      clearResults();
    }

    function clearResults() {
      $scope.query = '';
      vm.repoData = [];
    }

  }
})();
