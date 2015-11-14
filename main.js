var app = angular.module("AngularMusicApp", ["firebase", "ngRoute"]);
app.config(["$routeProvider",
	function($routeProvider){
		$routeProvider
			.when("/songs/list", {
				templateUrl: "partials/song-list.html",
				controller: "SongCtrl"
			})
			.when("/songs/new", {
				templateUrl: "partials/song-form.html",
				controller: "AddSongCtrl"
			});
	}]);
// ****************
// ANGULARFIRE
// ****************

    app.controller("SongCtrl", ["$scope", "$firebaseArray",
  	  function($scope, $firebaseArray) {
	

        var ref = new Firebase("https://angularmusichistoryw.firebaseio.com/songs");
        $scope.songs = $firebaseArray(ref);
          
        console.log($firebaseArray(ref));
        }
      ]);  
    
    app.controller("AddSongCtrl", ["$scope", "$firebaseArray",
    	function($scope, $firebaseArray) {
    	  var ref = new Firebase("https://angularmusichistoryw.firebaseio.com/songs");
    	  $scope.songs = $firebaseArray(ref);
    	  $scope.newSong = {};
    	  $scope.addSong = function() {
    	  	$scope.songs.$add({
    	  		title: $scope.newSong.title,
    	  		album: $scope.newSong.album,
    	  		artist: $scope.newSong.artist
    	  	})
    	  };
    	}]);
	

// ***************
// ***************
// ***************


// var app = angular.module("AngularMusicApp", ["ngRoute"])

// app.config(["$routeProvider",
// 	function($routeProvider){
// 		$routeProvider
// 			.when("/songs/list", {
// 				templateUrl: "partials/song-list.html",
// 				controller: "SongCtrl"
// 			})
// 			.when("/songs/new", {
// 				templateUrl: "partials/song-form.html",
// 				controller: "AddSongCtrl"
// 			});
// 	}]);

// app.factory("song_service", function($http, $q) {
// 	var songList;
// 	var getSongData = function() {
// 		return $q(function(resolve, reject) {
// 			$http
// 			.get("songs.json")
// 			.success(
// 				function(objectFromJSONFile){
// 					songList = objectFromJSONFile.songs;
// 					resolve(songList);
// 				}, function(error) {
// 					reject(error);
// 				}
// 				);
// 		});
// 	};

// 	function getSongs(){
// 		return getSongData();
// 	}

// 	function getSingleSong(id) {
// 		return getSongData().then(function(data))
// 	}

// });

	

// app.controller("SongCtrl", function($scope, $http) {

// 	$scope.songs = null;

	 
// 	$http.get("songs.json")
// 	  .success(function(data) {
// 		 console.log("jbv");
// 		 $scope.songs = data.songs;
// 		  console.log(data.songs);
// 	   })
// 	   .error(function(data) {console.log("error")});
	
//   });



// });