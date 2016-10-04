angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


.controller('PlaylistsCtrl', function($scope,$sce,$state,$ionicPopup) {

  $scope.renderhtml = $sce.trustAsHtml("<div> <div><ul class='insuranceListing'> <li class='first'>Insured Name:</li><li>John Doe Albert</li> <li class='first'>Owner Name: </li><li>John Doe Albert</li> <li class='first'>Effective Date: </li><li>15 / 09 / 2004</li> <li class='first'>Coverage Amount<br/> Premium: </li><li>$ 124.00</li> <li class='first'>Status: </li><li>Paid Up</li> </ul></div></div>");

  $scope.playlists = [];
  for (var i=0; i<20; i++) {
    $scope.playlists[i] = {
      name: "50A10326"+i+" - Annuity",
      items: [],
      show: false
    };
    for (var j=0; j<3; j++) {
      $scope.playlists[i].items.push(i + '-' + j);
    }
  }

  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleGroup = function(playlist) {
    playlist.show = !playlist.show;
  };
  $scope.isGroupShown = function(playlist) {
    return playlist.show;
  };


// Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<div><label ng-click="navigate1()" class="closePopup">x</label><ul class="popupList"><li class="firstImg"><a href="#">Update Personal Information</a></li><li class="secondImg"><a href="#">View Policy Details</a></li><li class="thirdImg"><a href="#">View Billing/Payments</a></li></ul></div>',
    scope: $scope,
    });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $scope.navigate1 = function(){
    myPopup.close();
    $state.go("app.policydetails");
  }

 };


})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('registerCtrl', function($scope, $stateParams,$state) {

  $scope.next = function(){
    $state.go("app.registertwo");
  }
  //$scope.next = function(){
  //  $state.go("app.registerthree");
 // }
})

// Policy Detail Ctrl
.controller('PolicyDetailCtrl', function($scope, $stateParams,$ionicPopup) {
  $scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<div><label ng-click="navigate1()" class="closePopup">x</label><h3 class="popUpHeding">Agent Details</h3><ul class="card-listing popwidth"><li><span>Phone:</span><span>(260) 489 5500</span></li><li><span>Email id:</span><span>markbene@jcifinancial.com</span></li></ul><span class="popImgBox"><img src="../img/popUserIcon.png"></span></div>',
    scope: $scope,
    });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  $scope.navigate1 = function(){
    myPopup.close();
    $state.go("app.policydetails");
  }

 };
})

.controller('GridCtrl', function($scope, $stateParams) {
  $(document).ready(function() {

      var h = ($( window ).height())-80;
      $('#example').DataTable( {
          paging: false,
          "scrollX": true,
          "scrollY": h,
          ordering:  false
      } );
  } );


  $scope.ctrl = [];

  for (var i = 0; i < 50; i++) {
    $scope.ctrl[i] =
    {
      product_name: "Single Premium whole life insurane",
      insured: "Naurma U heron "+i,
      status: "paid up",
      effective_date: "21/09/2019",
      coverage_date: "27/03/2067"
    }
  }
});
