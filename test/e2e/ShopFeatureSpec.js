describe("Setting a target", function() {

    beforeEach(function() {
        browser.get("http://localhost:8080");
    });

    var productList = element(by.className("product-list")),
        shoppingCart  = element(by.className("shopping-cart")),
        shopItemOne = element(by.id('item-0'));

    it('should load the correct homepage', function () {
      expect(browser.getTitle()).toEqual('So I Heard You Like Clothing');
    });

    describe('products', function () {
      it('are loading correctly onto the homepage', function () {
        expect(productList.getText()).toContain('Almond Toe Court Shoes');
      });
    });

    describe('shopping cart', function () {
      it('can have items added to it', function() {
        shopItemOne.click();
        expect(shoppingCart.getText()).toContain('Almond Toe Court Shoes');
      });
    });



});