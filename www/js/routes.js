angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {
  // Learn more here: https://github.com/angular-ui/ui-router
  $stateProvider
    .state('mainpage.invitePage', {
      url: '/invitePage',
      views: {
        'tab1': {
          templateUrl: 'templates/invitePage.html',
          controller: 'invitePage'
        }
      }
    })
    .state('mainpage.visitorList', {
      url: '/visitorList',
      views: {
        'tab2': {
          templateUrl: 'templates/visitorList.html',
          controller: 'visitorList'
        }
      }
    })
    .state('mainpage.inviteList', {
      url: '/inviteList',
      views: {
        'tab3': {
          templateUrl: 'templates/inviteList.html',
          controller: 'inviteList'
        }
      }
    })
    .state('mainpage.messagelist', {
      url: '/messagelist',
      views: {
        'tab4': {
          templateUrl: 'templates/messagelist.html',
          controller: 'messagelist'
        }
      }
    })
    .state('invitation', {
      url: '/invitation',
      templateUrl: 'templates/invitation.html',
      controller: 'invitation'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'login'
    })
    .state('reg', {
      url: '/reg',
      templateUrl: 'templates/reg.html',
      controller: 'reg'
    })
    .state('mainpage', {
      url: '/mainpage',
      abstract:true,
      templateUrl: 'templates/mainpage.html'
    });

  // 默认
  $urlRouterProvider.otherwise('/login');
});
