clothingShopFront.controller('ClothingShopController', [ 'productData', function(productData) {

  var self = this;

  var getProducts = function() {
    productData.then(function(response){
      self.productdata = response.data;
    });
  };

  getProducts();

  self.basket = [];

  self.addItem = function(product) {
    self.basket.push(product);
  };


}]);