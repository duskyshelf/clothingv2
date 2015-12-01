clothingShopFront.controller('ClothingShopController', [ 'productData', 'VoucherService', 'BasketService', function(productData, VoucherService, BasketService) {

  var self = this;
  self.basketService = BasketService;
  self.voucherService = VoucherService;

  var getProducts = (function() {
    productData.then(function(response){
      self.productdata = response.data;
    });
  })();

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

  self.basketTotal = function() {
    return BasketService.basketTotal() - VoucherService.discount;
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

}]);