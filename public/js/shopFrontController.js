clothingShopFront.controller('ClothingShopController', [ 'productData', function(productData) {

  var self = this;

  var getProducts = function() {
    productData.then(function(response){
      self.productdata = response.data;
    });
  };

  getProducts();

  self.basket = [];
  self.discount = 0;

  self.addItem = function(product) {
    var found = self.basket.some(function(item) {
      return item.name === product.name;
  });

    if (!found) {
      product.quantity = 1;
      self.basket.push(product);
    }
    else {
      for (var i in self.basket) {
        if (self.basket[i].name == product.name) {
          self.basket[i].quantity++;
        }
      }
    }
  };

  self.removeFromBasket = function(product) {
    var index = self.basket.indexOf(product);
    self.basket.splice(index, 1);
  };

  self.basketTotal = function() {
    return basketAdder() - self.discount;
  };

  var basketAdder = function() {
    var baskettotal = 0;
    self.basket.forEach(function(item) {
      baskettotal += item.price * item.quantity;
    });
    return baskettotal;
  };

  self.applyVoucher = function(voucher) {
    if (voucher === 'fiveoff') {
      self.discount = 5;
    }
    if (voucher === 'tenoff' && basketAdder() > 50) {
      self.discount = 10;
    }
  };

}]);