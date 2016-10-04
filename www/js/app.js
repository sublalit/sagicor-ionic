// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngSanitize'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider


    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
    templateUrl: 'templates/login.html',
    controller: 'AppCtrl'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/policy_details.html',
        controller:'Policy_DetailCtrl'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })

   .state('app.register', {
    url: '/register',
    views: {
      'menuContent': {
        templateUrl: 'templates/register.html',
        controller: 'RegisterCtrl'
      }
    }
  })


.state('app.registertwo', {
      url: '/registertwo',
      views: {
        'menuContent': {
          templateUrl: 'templates/registerTwo.html',
          controller: 'RegisterTwoCtrl'
        }
      }
    })
   .state('app.registerthree', {
      url: '/registerthree',
      views: {
        'menuContent': {
          templateUrl: 'templates/registerThree.html',
          controller: 'registerThreeCtrl'
        }
      }
    })

    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/my_insurance.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
//state for policy detail screen.
    .state('app.policydetail', {
      url: '/policydetail',
      views: {
        'menuContent': {
          templateUrl: 'templates/policyDetail.html',
          controller: 'PolicyDetailCtrl'
        }
      }
    })

    //state for Personal information screen.
  .state('app.personalinfo', {
    url: '/personalinfo',
    views: {
      'menuContent': {
        templateUrl: 'templates/personal_information.html',
        controller:'PersonalInfoCtrl'
      }
    }
  })

  //state for Billing/Payment Detail information screen.
  .state('app.billingdetail', {
    url: '/billingdetail',
    views: {
      'menuContent': {
        templateUrl: 'templates/billingDetail.html',
        controller:'BillingDetailCtrl'
      }
    }
  })

  .state('app.benifitDetail', {
    url: '/benifitDetail',
    views: {
      'menuContent': {
        templateUrl: 'templates/benifitDetail.html',
        controller:'BenifitDetailCtrl'
      }
    }
  })

  
  
  $urlRouterProvider.otherwise('/app/login');
});
