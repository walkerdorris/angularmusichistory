var app = angular.module("AngularMusicApp", ["firebase", "ngRoute"]);
app.config(["$routeProvider",
	function($routeProvider){
		$routeProvider
			.when("/songs/list", {
				templateUrl: "partials/song-list.html",
				controller: "SongCtrl as songList"
			})
			.when("/songs/new", {
				templateUrl: "partials/song-form.html",
				controller: "AddSongCtrl as addSongCtrl"
			});
	}]);
// ****************
// ANGULARFIRE
// ****************

    app.controller("SongCtrl", ["$firebaseArray",
  	  function($firebaseArray) {
	

        var ref = new Firebase("https://angularmusichistoryw.firebaseio.com/songs");
        this.songs = $firebaseArray(ref);
          
        console.log($firebaseArray(ref));
        }
      ]);  
    
    app.controller("AddSongCtrl", ["$firebaseArray",
    	function($firebaseArray) {
    	  var ref = new Firebase("https://angularmusichistoryw.firebaseio.com/songs");
    	  this.songs = $firebaseArray(ref);
    	  this.newSong = {};
    	  this.addSong = function() {
    	  	this.songs.$add({
    	  		title: this.newSong.title,
    	  		album: this.newSong.album,
    	  		artist: this.newSong.artist
    	  	})
    	  }.bind(this);
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