var app = angular.module('JokeApp', []);

app.controller('JokeController', ['$http', function ($http) {
  console.log('Jokes have been made');
  var self = this;
  self.jokes = [];
  self.getJokes = function () {
    $http({
      method: 'GET',
      url: '/jokes'
    }).then(function (response) {
      self.jokes = response.data
    });
  };
  self.postNewJokes = function () {
    $http({
      method: 'POST',
      url: '/jokes',
      data: self.newJokes
    }).then(function (response) {
      self.getJokes();
    })
  }
  self.deleteJoke = function (id) {
    $http({
      method: 'DELETE',
      url: '/jokes/' + id,
    }) .then(function (response) {
      self.getJokes();
    })
  }
  self.getJokes();

}])