var app = angular.module('JokeApp',[]);

app.controller('JokeController', ['$http', function($http){
  console.log('Jokes have been made');
  var self = this;
  self.jokes = [];
  self.getJokes = function () {
    $http({
      method: 'GET',
      url: '/jokes'
    }).then(function (response){
      self.jokes = response.data
    });
  };
  
  self.getJokes();

}])