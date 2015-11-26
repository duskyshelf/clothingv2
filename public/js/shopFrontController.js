clothingShopFront.controller('ClothingShopController', [ 'productData', 'VoucherService', 'BasketService', function(productData, VoucherService, BasketService) {

  var self = this;
  var voucherService = VoucherService;
  var basketService = BasketService;

  var getProducts = (function() {
    productData.then(function(response){
      self.productdata = response.data;
    });
  })();

  self.basket = basketService.basket;
  self.discount = 0;
  self.discountcode = "";

  self.addItem = function(product) {
    basketService.addItem(product);
    self.basket = basketService.basket;
  };

  self.removeFromBasket = function(product) {
    basketService.removeFromBasket(product);
    reapplyDiscount();
  };

  var reapplyDiscount = function() {
    self.applyVoucher(self.discountcode);
  };

  self.basketTotal = function() {
    return basketService.basketTotal() - self.discount;
  };

  self.applyVoucher = function(voucher) {
    self.discountcode = voucher;
    voucherService.applyVoucher(voucher);
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
    return basketService.basketCount();
  };

}]);