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
    ctrl.addItem({"product": "example"});
    expect(ctrl.basket).toEqual([{"product": "example", "quantity": 1}]);
  });

  it('allows products to be removed from basket', function() {
    ctrl.addItem({"product": "example"});
    var basketItem = ctrl.basket[0]
    ctrl.removeFromBasket(basketItem)
    expect(ctrl.basket).toEqual([]);
  });


});