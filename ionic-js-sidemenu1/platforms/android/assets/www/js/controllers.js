angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    $scope.isConversation = false;
    $scope.convButtonText = "Turn on conversation";


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

  $scope.toggleconversation = function () {
      if (!window.ConversationalForm) {
          window.ConversationalForm = new cf.ConversationalForm({
              formEl: document.getElementById("conversational"),
              context: document.getElementById("form-outer"),
              userImage: "img/human.png"
          });
          
      }
     
      var form = document.getElementById("conversational-form");

      if ($scope.isConversation) {
          $scope.isConversation = false;
          $scope.convButtonText = "Turn on conversation";
          form.classList.remove('conversational-form--show');
      }
      else {
          $scope.isConversation = true;
          $scope.convButtonText = "Turn off conversation";
          form.classList.add('conversational-form--show'); 

      }

  };

})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

    .controller('SearchCtrl', function ($scope) {
        if (!window.ConversationalForm) {
            window.ConversationalForm = new cf.ConversationalForm({
                formEl: document.getElementById("conversational"),
                context: document.getElementById("form-outer"),
                userImage: "img/human.png"
            });
        }
          

    })

 .controller('BotCtrl', function ($scope, $ionicPlatform) {
     if (!window.ConversationalForm) {
         window.ConversationalForm = new cf.ConversationalForm({
             formEl: document.getElementById("conversational"),
             context: document.getElementById("form-outer"),
             userImage: ""
         });
     }

     cordova.plugins.Keyboard.show();

     window.addEventListener('native.keyboardhide', keyboardHideHandler);

     function keyboardHideHandler(e) {
         cordova.plugins.Keyboard.show();

     }
     

 })
.controller('PlaylistCtrl', function ($scope, $stateParams) {

});


