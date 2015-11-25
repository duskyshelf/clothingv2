clothingShopFront.service('BasketService', ['productData', function(productData) {

  var self = this;

  self.basket = [];

  self.addItem = function(product) {
    if (outOfStock(product)) { throw "Out of stock"; }

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
    product.quantity = 0;
    var index = self.basket.indexOf(product);
    self.basket.splice(index, 1);
  };


  self.basketTotal = function() {
    var baskettotal = 0;
    self.basket.forEach(function(item) {
      baskettotal += item.price * item.quantity;
    });
    return baskettotal;
  };

  self.basketCount = function() {
    var itemCount = 0;
    self.basket.forEach(function(item) {
      itemCount += item.quantity;
    });
    return itemCount;
  };

  var outOfStock = function(product) {
    if (product.stock === 0) {
      return true;
    }
    return product.stock <= product.quantity;
  };

}]);