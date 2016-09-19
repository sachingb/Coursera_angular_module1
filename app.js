( function () {
   'use strict';

   angular.module('LunchCheck', [])

   .controller('LunchCheckController', LunchCheckController);

   LunchCheckController.$inject = ['$scope'];

   function LunchCheckController($scope) {
      $scope.lunchItems = "";
      $scope.outputMessage = "";

      $scope.checkItems = function(){

         var noOfItems = getNumberOfItems($scope.lunchItems);

         if(noOfItems >=1 && noOfItems <=3){
            setOutputMessage("Enjoy!");
         }else if(noOfItems > 3){
            setOutputMessage("Too much!");
         }else{
            setOutputMessage("Please enter data first");
         }

         function setOutputMessage(msg){
            $scope.outputMessage = msg;
         }
      }
   }



   function getNumberOfItems(items){

      if(items != ""){
         var numberOfItems = 0;
         numberOfItems = items.split(',').length;
         return numberOfItems;
      }

      return 0;
   }

})();
