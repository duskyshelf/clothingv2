clothingShopFront.service('VoucherService', function() {

  var self = this;

  self.discount = 0;

  self.applyVoucher = function(voucher, shoppingBasket) {
    self.basket = shoppingBasket;
    validVoucherCode(voucher);
    if (voucher === 'fiveoff') {
      self.discount = 5;
      self.voucheralert = "£5 Off Voucher Applied";
    }
    if (voucher === 'tenoff' && basketTotal() > 50) {
      self.discount = 10;
      self.voucheralert = "£10 Off Voucher Applied";
    }
    if (voucher === '15off' && basketTotal() > 75 && confirmFootwear()) {
      self.discount = 15;
      self.voucheralert = "£15 Off Voucher Applied";
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