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
    expect(ctrl.basketTotal()).toEqual(100);
    ctrl.applyVoucher('fiveoff');
    expect(ctrl.basketTotal()).toEqual(95);
  });


});