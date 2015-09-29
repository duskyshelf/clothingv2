describe('ClothingShopController', function() {

  beforeEach(module('ClothingShop'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ClothingShopController');
  }));

  it('initialises with an empty basket', function() {
    expect(ctrl.basket).toEqual([]);
  });

  it('allows products to be added to basket', function() {
    ctrl.addItem({"name": "example"});
    expect(ctrl.basket).toEqual([{"name": "example", "quantity": 1}]);
  });

  it('allows products to be removed from basket', function() {
    ctrl.addItem({"name": "example"});
    var basketItem = ctrl.basket[0];
    ctrl.removeFromBasket(basketItem);
    expect(ctrl.basket).toEqual([]);
  });

  it('calculates a running total for the basket', function() {
    ctrl.addItem({"name": "example", "price": 100});
    expect(ctrl.basketTotal()).toEqual(100);
    ctrl.addItem({"name": "example2", "price": 150});
    expect(ctrl.basketTotal()).toEqual(250);
  });

  it('allows £5 off voucher to be applied', function() {
    ctrl.addItem({"name": "example", "price": 100});
    ctrl.applyVoucher('fiveoff');
    expect(ctrl.basketTotal()).toEqual(95);
  });

  it('allows £10 off voucher to be applied for order over £50', function() {
    ctrl.addItem({"name": "example", "price": 100});
    ctrl.applyVoucher('tenoff');
    expect(ctrl.basketTotal()).toEqual(90);
  });

  it('does not allow £10 off voucher to be applied for order under £50', function() {
    ctrl.addItem({"name": "example", "price": 40});
    ctrl.applyVoucher('tenoff');
    expect(ctrl.basketTotal()).toEqual(40);
  });

  it('allows £15 off voucher to be applied for male footwear order over £75', function() {
    ctrl.addItem({"name": "example", "category": "Men's Footwear", "price": 80});
    ctrl.applyVoucher('15off');
    expect(ctrl.basketTotal()).toEqual(65);
  });

  it('allows £15 off voucher to be applied for female footwear order over £75', function() {
    ctrl.addItem({"name": "example", "category": "Women's Footwear", "price": 80});
    ctrl.applyVoucher('15off');
    expect(ctrl.basketTotal()).toEqual(65);
  });

  it('does not allow £15 off voucher to be applied non-footwear order', function() {
    ctrl.addItem({"name": "example", "category": "Men's Casualwear", "price": 80});
    ctrl.applyVoucher('15off');
    expect(ctrl.basketTotal()).toEqual(80);
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