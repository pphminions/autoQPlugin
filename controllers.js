'use strict';

/* Controllers */
var phonecatApp = angular.module('qengineApp', []);

phonecatApp.controller('qengineCtrl', function ($scope, $http) {
//  $http.get('../assets/data/phones.json').success(function(data) {
//    $scope.phones = data;
//  });
    
    $http.get('http://autoq.herokuapp.com/getRecommendations/puppy').success(function(data){
        $scope.videos = data.videos;
        
    });
});