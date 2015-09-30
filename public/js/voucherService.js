clothingShopFront.service('VoucherService', function() {

  var self = this;

  self.discount = 0;
  self.basket = [];
  self.voucheralert = "";

  var getVoucherList = function() {
    return {
      "fiveoff": { "validation": [true], "discount": 5 },
      "tenoff":  { "validation": [ (basketTotal() > 50) ],  "discount": 10 },
      "15off":   { "validation": [ (basketTotal() > 75), confirmFootwear() ], "discount": 15 }
    };
  };

  self.applyVoucher = function(voucher, shoppingBasket) {
    self.basket = shoppingBasket;
    if (validVoucherCode(voucher)) {processCode(voucher);}
  };

  var processCode = function(voucher) {
    if (getVoucherList()[voucher].validation.every(Boolean)) {
      self.discount = getVoucherList()[voucher].discount;
      self.voucheralert = "Discount Applied";
    }
    else {
      self.voucheralert = "Discount Requirements Not Met";
    }
  };

  var validVoucherCode = function(voucher) {
    var vouchercodes = ['fiveoff', 'tenoff', '15off'];
    var correctcode = vouchercodes.some(function(validcode) {
      return voucher === validcode;
    });
    if (!correctcode) {
      self.discount = 0;
      self.voucheralert = "Invalid Code";
    }
    return correctcode;
  };

  var basketTotal = function() {
    var baskettotal = 0;
    self.basket.forEach(function(item) {
      baskettotal += item.price * item.quantity;
    });
    return baskettotal;
  };

  var confirmFootwear = function() {
    var confirmfootwear = false;
    confirmfootwear = self.basket.some(function(item) {
      return item.category.split(" ")[1] === "Footwear";
    });
    return confirmfootwear;
  };

});