(function() {
  'use strict';

  angular
    .module('belong')
  .service('apiService', function($http, Restangular) {

    this.getGithubUser = function(username) {
      var requestURL = "https://api.github.com/users/"+ username;
      var apiResponse = Restangular.oneUrl('github', requestURL)
        .get()
        .then(function(serverResponse) {
          return serverResponse;
        });
      return apiResponse;
    };

    this.getGithubUserRepo = function(username) {
      var requestURL = "https://api.github.com/users/"+username+"/repos" ;
      var apiResponse = Restangular.oneUrl('github', requestURL)
        .get()
        .then(function(serverResponse) {
          return serverResponse;
        });
      return apiResponse;
    };

  });
})();
