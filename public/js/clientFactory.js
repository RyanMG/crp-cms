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
        data = this.parsePostData(projectData);
        var deferred = $q.defer();
        $http({
          method: 'POST',
          url: '/projects',
          data: data,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(data) {
          deferred.resolve(data);
        }).error(function(error) {
          deferred.reject(error);
        });
        return deferred.promise;
      },

      parsePostData: function(data) {
        var parsed = [],
            prop;
        for ( prop in data ) {
          if(data.hasOwnProperty(prop)) {
            parsed.push(encodeURIComponent(prop) + '=' + encodeURIComponent(data[prop]));
          }
        }
        return parsed.join( "&" );
      }

    };
    return service;
  });
