clothingShopFront.controller('ClothingShopController', [ 'productData', 'VoucherService', 'BasketService', function(productData, VoucherService, BasketService) {

  var self = this;
  self.basket = BasketService.basket;
  self.voucherService = VoucherService;

  productData.then(function(response) {
    self.productdata = response.data;
  });

  self.addItem = function(product) {
    BasketService.addItem(product);
  };

  self.removeFromBasket = function(product) {
    BasketService.removeFromBasket(product);
    reapplyDiscount();
  };

  var reapplyDiscount = function() {
    VoucherService.applyVoucher(VoucherService.discountcode);
  };

  self.discountedBasketValue = function() {
    return BasketService.basketTotal() - VoucherService.discount;
  };

  self.outOfStock = function(product) {
    if (product.stock === 0) { return true; }
    return product.stock <= product.quantity;
  };

  self.basketCount = function() {
    return BasketService.count();
  };

}]);