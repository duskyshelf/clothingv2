clothingShopFront.service('BasketService', function() {

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

  var outOfStock = function(product) {
    if (product.stock === 0) {
      return true;
    }
    return product.stock <= product.quantity;
  };

});