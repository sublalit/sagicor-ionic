angular.module('starter.controllers', ['pickadate'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $state,$ionicSideMenuDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  //Hiding the Navigation Drawer on login screen.
  $ionicSideMenuDelegate.canDragContent(false);


  $scope.signUp = function(){
      console.log('Doing signup');
      $state.go("app.register");
    }

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);
    $state.go("app.playlists");

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope,$sce,$state,$ionicPopup) {

  $scope.renderhtml = $sce.trustAsHtml("<div> <div><ul class='insuranceListing'> <li class='first'>Insured Name:</li><li>John Doe Albert</li> <li class='first'>Owner Name: </li><li>John Doe Albert</li> <li class='first'>Effective Date: </li><li>15 / 09 / 2004</li> <li class='first'>Coverage Amount<br/> Premium: </li><li>$ 124.00</li> <li class='first clear'>Status: </li><li>Paid Up</li> </ul></div></div>");

  $scope.playlists = [];
  for (var i=0; i<14; i++) {
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

  // $scope.showPopup = function(){

  //   $state.go("app.policydetails");
  //   alert("alert");
  // }

// Triggered on a button click, or some other target
$scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<div><label ng-click="close()" class="closePopup">x</label><ul class="popupList"><li class="firstImg"><a ng-click="gotoUpdateProfile()">Update Personal Information</a></li><li class="secondImg"><a ng-click="gotoPolicyDetails()">View Policy Details</a></li><li class="thirdImg"><a ng-click="viewPayments()">View Billing/Payments</a></li></ul></div>',
    //title: 'Enter Wi-Fi Password',
    //subTitle: 'Please use normal things',
    scope: $scope,
    // buttons: [
    //   { text: 'Cancel' },
    //   {
    //     text: '<b>Save</b>',
    //     type: 'button-positive',
    //     onTap: function(e) {
    //       if (!$scope.data.wifi) {
    //         //don't allow the user to close unless he enters wifi password
    //         e.preventDefault();
    //       } else {
    //         return $scope.data.wifi;
    //       }
    //     }
    //   }
    // ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  //Function to close pop up.
  $scope.close = function(){
    myPopup.close();
  }
  //Function to open Profile Screen.
  $scope.gotoUpdateProfile = function(){
    myPopup.close();
    $state.go("app.personalinfo");
  }

  //Function to open Policy Detail Screen.
  $scope.gotoPolicyDetails = function(){
    myPopup.close();
    $state.go("app.policydetail");
  }

  //Function to open Billing/ViewPayments Screen.
  $scope.viewPayments = function(){
    myPopup.close();
    $state.go("app.billingdetail");
  }

  // $timeout(function() {
  //    myPopup.close(); //close the popup after 3 seconds for some reason
  // }, 3000);
 };


})


.controller('Policy_DetailCtrl', function($scope) {
  
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
  
})

.controller('PolicyDetailCtrl', function($scope,$ionicPopup,$state) {

  
 $scope.showPopup = function() {
  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<div><label ng-click="close()" class="closePopup">x</label><h3 class="popUpHeding">Agent Details</h3><ul class="card-listing popwidth"><li><span>Phone:</span><span>(260) 489 5500</span></li><li><span>Email id:</span><span>markbene@jcifinancial.com</span></li></ul><span class="popImgBox"><img src="img/popUserIcon.png"></span></div>',
    scope: $scope,
    });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });

  //Function to close pop up.
  $scope.close = function(){
    myPopup.close();
  }

 };


 $(document).ready(function() {

      var h = ($( window ).height())-80;
      $('#example').DataTable( {
          paging: false,
          "scrollX": true,
          "scrollY": h,
          ordering:  false
      } );

      $("tr").click(function(){
    $state.go("app.benifitDetail");
});
  });

  // $scope.openBenifitDetail = function(){
  //   $state.go("app.benifitDetail");
  // }
  
})

.controller('PersonalInfoCtrl', function($scope, $stateParams) {
})

.controller('BillingDetailCtrl', function($scope, $stateParams,$ionicModal) {

$ionicModal.fromTemplateUrl('templates/datemodal.html', 
        function(modal) {
            $scope.datemodal = modal;
        },
        {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope, 
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
        }
    );
    $scope.opendateModal = function() {
      $scope.datemodal.show();
    };
    $scope.closedateModal = function(modal) {
      $scope.datemodal.hide();
      $scope.datepicker = modal;
    };

    $(document).ready(function() {

      var h = ($( window ).height())-80;
      $('#example').DataTable( {
          paging: false,
          "scrollX": true,
          "scrollY": h,
          ordering:  false
      } );
  });
})

.controller('RegisterCtrl', function($scope, $stateParams,$state,$ionicModal) {

  $ionicModal.fromTemplateUrl('templates/datemodal.html', 
        function(modal) {
            $scope.datemodal = modal;
        },
        {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope, 
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
        }
    );
    $scope.opendateModal = function() {
      $scope.datemodal.show();
    };
    $scope.closedateModal = function(modal) {
      $scope.datemodal.hide();
      $scope.datepicker = modal;
    };

  $scope.next = function(){
    $state.go("app.registertwo");
  }

  $scope.cancel = function(){
    $state.go("app.login");
  }
})

.controller('RegisterTwoCtrl', function($scope, $stateParams,$state) {

  $scope.next = function(){
    $state.go("app.registerthree");
  }

  $scope.cancel = function(){
    $state.go("app.login");
  }
  
})

.controller('registerThreeCtrl', function($scope, $stateParams,$state) {

  $scope.next = function(){
    $state.go("app.playlists");
  }

  $scope.cancel = function(){
    $state.go("app.login");
  }
  
})

.controller('BenifitDetailCtrl', function($scope, $stateParams,$state) {

  $(document).ready(function() {

      var h = ($( window ).height())-80;
      $('#example1').DataTable( {
          paging: false,
          "scrollX": true,
          "scrollY": h,
          ordering:  false,
          "search":false,
          "info":     false
      } );
  });
  
});
