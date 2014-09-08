(function (angular, localforage) {
  'use strict';

  angular
    .module('LocalForage', [])
    .provider('$localForage', function () {

      return {

        $get: function ($rootScope, $q) {

          var getPromise = function () {
            var deferred = $q.defer();
            deferred.resolve('OK');
            return deferred.promise;
          };

          var setItem = function () {

            // option 1 retrun localforage promise
            //return localforage.setItem('name', 'Mr. Bean');

            // option 2 return Angular $q promise
            //var deferred = $q.defer();
            //localforage.setItem('name', 'Mr. Bean').then(function success(data) {
            //  console.log('localforage.setItem', data);
            //  deferred.resolve(data);
            //});
            //return deferred.promise;

            // option 3
            //var deferred = $q.defer();
            //$q.when(localforage.setItem('name', 'Mr. Bean')).then(
            //  function success(data) {
            //    console.log('localforage.setItem success', data);
            //    deferred.resolve(data);
            //  },
            //  function error(err) {
            //    console.log('localforage.setItem error', err);
            //    deferred.reject(err);
            //  });
            //return deferred.promise;
            return $q.when(localforage.setItem('name', 'Mr. Bean'));

          };

          // Public API
          return {
            getPromise: getPromise,
            setItem: setItem
          }
        }

      }
    });

})(window.angular, window.localforage);
