describe('ClothingShopController', function() {

  beforeEach(module('ClothingShop'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ClothingShopController');
    ctrl.applyVoucher = ctrl.voucherService.applyVoucher;
  }));

  it('initialises with an empty basket', function() {
    expect(ctrl.basket).toEqual([]);
  });

  it('allows products to be added to basket', function() {
    ctrl.addItem({"name": "example", "category": "example"});
    expect(ctrl.basket).toEqual([{"name": "example", "quantity": 1, "category": "example"}]);
  });

  it('allows products to be removed from basket', function() {
    ctrl.addItem({"name": "example", "category": "example"});
    var basketItem = ctrl.basket[0];
    ctrl.removeFromBasket(basketItem);
    expect(ctrl.basket).toEqual([]);
  });

  it('calculates a running total for the basket', function() {
    ctrl.addItem({"name": "example", "price": 100, "category": "example"});
    expect(ctrl.discountedBasketValue()).toEqual(100);
    ctrl.addItem({"name": "example2", "price": 150, "category": "example"});
    expect(ctrl.discountedBasketValue()).toEqual(250);
  });

  it('allows £5 off voucher to be applied', function() {
    ctrl.addItem({"name": "example", "price": 100, "category": "example"});
    ctrl.voucherService.applyVoucher('fiveoff');
    expect(ctrl.discountedBasketValue()).toEqual(95);
  });

  it('allows £10 off voucher to be applied for order over £50', function() {
    ctrl.addItem({"name": "example", "price": 100, "category": "example"});
    ctrl.applyVoucher('tenoff');
    expect(ctrl.discountedBasketValue()).toEqual(90);
  });

  it('does not allow £10 off voucher to be applied for order under £50', function() {
    ctrl.addItem({"name": "example", "price": 40, "category": "example"});
    ctrl.applyVoucher('tenoff');
    expect(ctrl.discountedBasketValue()).toEqual(40);
  });

  it('allows £15 off voucher to be applied for male footwear order over £75', function() {
    ctrl.addItem({"name": "example", "category": "Men's Footwear", "price": 80});
    ctrl.applyVoucher('15off');
    expect(ctrl.discountedBasketValue()).toEqual(65);
  });

  it('allows £15 off voucher to be applied for female footwear order over £75', function() {
    ctrl.addItem({"name": "example", "category": "Women's Footwear", "price": 80});
    ctrl.applyVoucher('15off');
    expect(ctrl.discountedBasketValue()).toEqual(65);
  });

  it('does not allow £15 off voucher to be applied non-footwear order', function() {
    ctrl.addItem({"name": "example", "category": "Men's Casualwear", "price": 80});
    ctrl.applyVoucher('15off');
    expect(ctrl.discountedBasketValue()).toEqual(80);
  });

  it('does not allow an out of stock item to be ordered', function() {
    var exampleproduct = ({"name": "example", "stock": 0});
    expect(function() { ctrl.addItem(exampleproduct); }).toThrow("Out of stock");
  });

  it('does not allow an more than the current stock to be ordered', function() {
    var exampleproduct = {"name": "example", "stock": 1};
    ctrl.addItem(exampleproduct);
    expect(function() { ctrl.addItem(exampleproduct); }).toThrow("Out of stock");
  });

});