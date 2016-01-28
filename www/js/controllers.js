angular.module('app.controllers', [])

.controller('invitePage', function($scope) {

})
.controller('visitorList', function($scope) {

})
.controller('inviteList', function($scope) {

})
.controller('messagelist', function($scope) {

})
.controller('invitation', function($scope) {

})
.controller('login', function($scope,$state,CacheFactory,dialog) {
    // 已经登录，则直接跳转至主界面
    if(CacheFactory.get('Login')) {
      $state.go('mainpage.invitePage');
      return;
    }
    $scope.user = {};
    $scope.loginIn=function(valid){
      // 验证
      if(valid){
        //HttpFactory.send({
        //  url:RequestUrl+'Action.ashx?Name=HYD.E3.Business.UserInfoBLL.Login',
        //  data:$scope.user,
        //  method: 'post'
        //}).success(function(data){
        //  console.log(data);
        //  //判断是否登录成功
        //  if(data.data.Login){
        //    //存储登录信息
        //    CacheFactory.save('Login',data.data.Login);
        //    //跳转至主页
        //    $state.go("mainpage.invitePage");
        //  }else{
        //    dialog.show("用户名或密码错误!");
        //  }
        //});
      }else{
        if($scope.user.username==undefined&&$scope.user.password==undefined){
          dialog.show("用户名和密码不能为空!");
        }
        else if($scope.user.username==undefined){
          dialog.show("用户名不能为空!");
        }
        else if($scope.user.password==undefined){
          dialog.show("密码不能为空!");
        }
      }
    };
})

.controller('reg', function($scope) {

})
