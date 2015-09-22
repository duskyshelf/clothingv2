describe("Setting a target", function() {
    beforeEach(function() {
        browser.get("http://localhost:8080");
    });

    it('should load the correct page', function () {
      expect(browser.getTitle()).toEqual('So I Heard You Like Clothing');
    });

});