clothingShopFront.controller('ClothingShopController', [ 'productData', function(productData) {

var self = this;

self.getProducts = function() {
  console.log("getProducts called");
  console.log(productData);
};

}]);