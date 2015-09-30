clothingShopFront.controller('ClothingShopController', [ 'productData', 'VoucherService', function(productData, VoucherService) {

  var self = this;
  var voucherService = VoucherService;

  var getProducts = function() {
    productData.then(function(response){
      self.productdata = response.data;
    });
  };

  getProducts();

  self.basket = [];
  self.discount = 0;

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
    voucherService.applyVoucher(voucher, self.basket);
    self.voucheralert = voucherService.voucheralert;
    self.discount = voucherService.discount;
  };

  self.outOfStock = function(item) {
    return outOfStock(item);
  };

  var outOfStock = function(product) {
    if (product.stock === 0) {
      return true;
    }
    return product.stock <= product.quantity;
  };

  self.basketCount = function() {
    var itemCount = 0;
    self.basket.forEach(function(item) {
      itemCount += item.quantity;
    });
    return itemCount;
  };

}]);