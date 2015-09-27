describe('factory: productData', function() {

  var productdata;

  var shoes = [
        { name: "Almond Toe Court Shoes, Patent Black",
          category: "Women's Footwear",
          price: 99.00,
          stock: 5 },
        { name: "Suede Shoes, Blue",
          category: "Women's Footwear",
          price: 42.00,
          stock: 4 }
      ];

  beforeEach(module('ClothingShop'));

  beforeEach(inject(function(productData) {
    productdata = productData;
  }));

  // beforeEach(inject(function($httpBackend) {
  //   httpBackend = $httpBackend;
  //   httpBackend
  //     .when("https://api.github.com/search/users?q=hello")
  //     .respond(
  //       { items: items }
  //     );
  // }));

  it('returns the product list', function() {
  search.query('hello')
    .then(function(response) {
      expect(response.data).toEqual(shoes);
    });
  });




});