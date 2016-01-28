angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('BlankService', [function(){

}])

.factory('CacheFactory', function($window){
    var append = function(key, value){
    };
    var save = function(key, value){
      $window.localStorage.setItem(key, typeof value == 'object' ? JSON.stringify(value) : value);
    };
    var get = function(key){
      return $window.localStorage.getItem(key) || null;
    };
    var remove = function(key){
      $window.localStorage.removeItem(key);
    };
    var removeAll= function () {
      //$window.localStorage.clear();
      $window.localStorage.removeItem('Login');
      $window.localStorage.removeItem('UserName');
    };
    return {
      append: append,
      save: save,
      get: get,
      remove: remove,
      removeAll:removeAll
    };
  })
  .factory('HttpFactory', function($http, $ionicLoading,$timeout,dialog){
    // 错误计数
    var count=0;
    var send = function(config){
      !!config.scope && ( config.scope.loading = true);

      !!config.mask && $ionicLoading.show({
        template: typeof config.mask == "boolean" ? '请稍等...' : config.mask
      });

      config.headers={ 'Content-Type': 'application/x-www-form-urlencoded'};
      config.method == 'post' && ( config.data = config.data || {} );
      ionic.extend(config, {
        timeout: 15000
      });
      var http = $http(config);
      http.catch(function(error) {
        $timeout(function () {
          $ionicLoading.hide();
          dialog.show('请求出错,请检查网络！');
        },3000);
        if (error.status == 0) {
          count++;
          if(count>7){
            count=0;
            dialog.show('网络出现问题，请检查网络');}
        }
      });
      http.finally(function(){
        !!config.scope && (config.scope.loading = false);
        !!config.mask && $ionicLoading.hide();
      });
      return http;
    };
    return {
      send: send
    };
  })
  .factory('dialog',function($ionicLoading,$timeout){
    return{
      show:function(msg, timeout, prev, post){
        $ionicLoading.show({template:msg});
        $timeout(function(){
          prev && prev();
          $ionicLoading.hide();
          post && post();
        }, timeout || 2000);
        return false;
      }
    }
  })

