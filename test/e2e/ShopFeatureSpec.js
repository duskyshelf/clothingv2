describe("Setting a target", function() {

    beforeEach(function() {
        browser.get("http://localhost:8080");
    });

    var productList = element(by.className("product-list")),
        shoppingCart  = element(by.className("shopping-cart"));

    it('should load the correct homepage', function () {
      expect(browser.getTitle()).toEqual('So I Heard You Like Clothing');
    });

    describe('products', function () {
      it('are loaded correctly onto the homepage', function () {
        expect(productList.getText()).toContain('Almond Toe Court Shoes');
      });
    });

});