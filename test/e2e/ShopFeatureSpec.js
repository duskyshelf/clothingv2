describe("Setting a target", function() {

    beforeEach(function() {
        browser.get("http://localhost:8080");
    });

    var productList = element(by.className("product-list")),
        shoppingCart  = element(by.className("shopping-cart")),
        shopItemOne = element(by.id('item-0')),
        removeBasketItemOne = element(by.id('basket-0')),
        basketTotal = element(by.className("basket-total")),
        voucherCodeBox = element(by.className("voucher-box")),
        voucherApply = element(by.className("voucher-btn"));

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

      it('can have items removed from it', function() {
        shopItemOne.click();
        removeBasketItemOne.click();
        expect(shoppingCart.isPresent()).toEqual(false);
      });

      it('displays the basket total', function() {
        shopItemOne.click();
        expect(basketTotal.getText()).toEqual("Total: £99.00");
      });

      it('allows a £5 off voucher to be applied', function() {
        shopItemOne.click();
        voucherCodeBox.sendKeys('fiveoff');
        voucherApply.click();
        expect(basketTotal.getText()).toEqual("Total: £94.00");
      });

    });

});