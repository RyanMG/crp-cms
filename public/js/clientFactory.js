angular.module('crpCMSapp.factories', []).
  factory('ProjectServices', function($q, $http) {
    var service = {

      getProjects: function() {
        var deferred = $q.defer();
        $http.get('/projects').success(function(data){
          deferred.resolve(data);
        }).error(function(error){
          deferred.reject(error);
        });
        return deferred.promise;
      },

      addProject: function(projectData) {
        console.log(projectData);
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: '/projects',
          data: projectData,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(data) {
          deferred.resolve(data);
        }).error(function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      }

    };
    return service;
  });
