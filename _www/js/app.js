// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
  
  .state('app.policyDetail', {
      url: '/policyDetail',
      views: {
        'menuContent': {
          templateUrl: 'templates/policyDetail.html',
          controller: 'PolicyDetailCtrl'
        }
      }
    })

  .state('app.billingDetails', {
      url: '/billingDetails',
      views: {
        'menuContent': {
          templateUrl: 'templates/billingDetails.html'
        }
      }
    })

   .state('app.register', {
      url: '/register',
      views: {
        'menuContent': {
          templateUrl: 'templates/register.html',
          controller: 'registerCtrl'
        }
      }
    })

   .state('app.registertwo', {
      url: '/registertwo',
      views: {
        'menuContent': {
          templateUrl: 'templates/registerTwo.html',
          //controller: 'registerTwoCtrl'
        }
      }
    })
   .state('app.registerthree', {
      url: '/registerthree',
      views: {
        'menuContent': {
          templateUrl: 'templates/registerThree.html',
          //controller: 'registerTwoCtrl'
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
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/my_insurance.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.grid', {
      url: '/grid',
      views: {
        'menuContent': {
          templateUrl: 'templates/grid.html',
          controller: 'GridCtrl'
        }
      }
    })

  // .state('app.single', {
  //   url: '/playlists/:playlistId',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/playlist.html',
  //       controller: 'PlaylistCtrl'
  //     }
  //   }
  // });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
