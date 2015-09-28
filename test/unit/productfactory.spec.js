describe('factory: productData', function() {

  var productdata;

  var productsample = [
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

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
      .when('GET', 'js/ProductList.json')
      .respond(
        productsample
      );
  }));


  it('returns the product list', function() {
  productdata
    .then(function(response) {
      expect(response.data).toEqual(productsample);
    });
  });

});