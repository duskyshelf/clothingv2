describe('ClothingShopController', function() {

  beforeEach(module('ClothingShop'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ClothingShopController');
  }));

  it('initialises with an empty basket', function() {
    expect(ctrl.basket).toEqual([]);
  });

  it('allows products to be added', function() {
    ctrl.addItem({"product": "example"});
    expect(ctrl.basket).toEqual([{"product": "example"}]);
  });


});