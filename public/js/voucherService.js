clothingShopFront.service('VoucherService', function() {

  var self = this;

  self.discount = 0;
  self.basket = [];
  self.voucheralert = "";

  var getVoucherList = function() {
    return {
      "fiveoff": { "validation": [ self.basket.length > 0],
                   "discount": 5,
                   "message": "£5 Discount Applied" },
      "tenoff":  { "validation": [ (basketTotal() > 50) ],
                   "discount": 10,
                   "message": "£10 Discount Applied" },
      "15off":   { "validation": [ (basketTotal() > 75), confirmFootwear() ],
                   "discount": 15,
                   "message": "£15 Discount Applied"}
    };
  };

  self.applyVoucher = function(voucher, shoppingBasket) {
    self.basket = shoppingBasket;
    if (validVoucherCode(voucher)) {processCode(voucher);}
  };

  var processCode = function(voucher) {
    var voucherInfo = getVoucherList()[voucher];
    if (voucherInfo.validation.every(Boolean)) {
      self.discount = voucherInfo.discount;
      self.voucheralert = voucherInfo.message;
    }
    else {
      self.voucheralert = "Code Not Applied Discount Requirements Not Met";
      self.discount = 0;
    }
  };

  var validVoucherCode = function(voucher) {
    var vouchercodes = Object.getOwnPropertyNames(getVoucherList());
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