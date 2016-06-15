var fruitArray = [];
var totalCash = 10000;
function Fruit(name, price){
  this.name = name;
  this.price = price;
  this.inventory = 0;
  this.totalSpent = 0;
  fruitArray.push(this);
}

var apple = new Fruit("Apple", 0);
var pear = new Fruit("Pear", 0);
var banana = new Fruit("Banana", 0);
var pineapple = new Fruit("Pineapple", 0);

var myApp = angular.module("myApp", []);

myApp.controller("MainController", ["$scope","$http", function($scope, $http){
  console.log("Controller Working", fruitArray);
  //Create Market
  $scope.fruitMarket = fruitArray;
  console.log($scope.fruitMarket);

  $scope.buyFruit = function(fruit){
    if(fruit.price < totalCash){
      totalCash -= fruit.price;
      fruit.inventory ++;
    }
    console.log("Total Cash remaining: ", totalCash);
    console.log("Total Inventory of fruit ", fruit.inventory);
  }

  $scope.sellFruit = function(fruit){

  }
}]);


//Create Interval Timer

//Create Buy Button Function
