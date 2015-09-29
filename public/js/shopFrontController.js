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
    if (outOfStock(product)) {
      throw "Out of stock";
    }


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
    validVoucherCode(voucher);
    if (voucher === 'fiveoff') {
      self.discount = 5;
      self.voucheralert = "£5 Off Voucher Applied";
    }
    if (voucher === 'tenoff' && basketAdder() > 50) {
      self.discount = 10;
      self.voucheralert = "£5 Off Voucher Applied";
    }
    if (voucher === '15off' && basketAdder() > 75 && confirmFootwear()) {
      self.discount = 15;
      self.voucheralert = "£15 Off Voucher Applied";
    }
  };

  var validVoucherCode = function(voucher) {
    var vouchercodes = ['fiveoff', 'tenoff', '15off'];
    var correctcode = vouchercodes.some(function(validcode) {
      return voucher === validcode;
    });

    if (!correctcode) { self.voucheralert = "Invalid Code"; }
  };

  var confirmFootwear = function() {
    var confirmfootwear = false;
    confirmfootwear = self.basket.some(function(item) {
      return item.category.split(" ")[1] === "Footwear";
    });
    return confirmfootwear;
  };

  var outOfStock = function(product) {
    if (product.stock === 0) {
      return true;
    }
    return product.stock <= product.quantity;
  };

}]);