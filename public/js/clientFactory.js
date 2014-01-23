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
        var data = this.parsePostData(projectData);
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

      removeProject: function(title, id) {
        var data = this.parsePostData({ title: title, id: id });
        var deferred = $q.defer();
        $http({
          method: 'DELETE',
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

      updateProject: function(patchData) {
        var data = this.parsePostData(patchData);
        var deferred = $q.defer();
        $http({
          method: 'PUT',
          url: '/projects',
          data: data,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
          deferred.reject(error);
        });
        return deferred.promise;
      },

      updateOrder: function(patchData) {
        var data = this.parsePostData(patchData);
        var deferred = $q.defer();
        $http({
          method: 'PATCH',
          url: '/projects',
          data: data,
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        }).success(function(data) {
          deferred.resolve(data);
        }).error(function(data) {
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
