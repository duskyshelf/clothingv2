clothingShopFront.factory('productData', function($http) {

  var obj = {};

  $http.get('js/ProductList.json').then(function(data) {
    console.log(data);
    obj = data;
  });

  return obj;
});