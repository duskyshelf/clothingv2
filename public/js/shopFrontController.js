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
    var found = self.basket.some(function(item) {
      return item.name === product.name;
    });

    if (!found)
      {
        product.quantity = 1;
        self.basket.push(product);
        console.log(product);
      }
    else
      {
        for (var i in self.basket)
          {
            if (self.basket[i].name == product.name)
              {
                console.log(1);
                console.log(product);
                self.basket[i].quantity++;
              }
          }
      }
  };

}]);