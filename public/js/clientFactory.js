angular.module('crpCMSapp.factories', []).
  factory('ProjectServices', function($q, $http) {
    var service = {
      getProjects: function() {
        var deferred = $q.defer();
        $http.get('/projects').success(function(data){
          data.forEach(function(project) {
            console.log(project);
          });
          deferred.resolve(data);
        }).error(function(error){
          deferred.reject(error);
        });
        return deferred.promise;
      },

      createProject: function(project) {
        var deferred = $q.defer();
        $http.post('/projects').success(function(data) {
          defered.resolove(data);
        }).error(function(error){
          deferred.reject(error);
        });
      },

      deleteProject: function(project) {
        var deferred = $q.defer();
        $http.delete('/projects').success(function(data) {
          defered.resolove(data);
        }).error(function(error){
          deferred.reject(error);
        });
      },

      updateProject: function(project) {
        var deferred = $q.defer();
        $http.put('/projects').success(function(data) {
          defered.resolove(data);
        }).error(function(error){
          deferred.reject(error);
        });
      }
    };
    return service;
  });
