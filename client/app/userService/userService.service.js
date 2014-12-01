'use strict';

angular.module('trellisApp')
  .factory('userService', function ($http){
    // Public API here
    return {

    	/**** NOTE: This works without passing a cb,
    	is it just best practices? ****/

    	getPlants: function (cb) {
    		$http.get('/api/users/populateTrellis/')
                .success(cb);
    	},

    	searchUserByPhoneOrEmail: function (search, cb) {
    		$http.post('/api/users/userSearch/', search)
    			.success(cb)

    	},

        clone: function (plantId, cb) {
            $http.put('/api/users/clone/', plantId)
                .success(cb);
        }
    };
  });