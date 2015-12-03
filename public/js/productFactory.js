clothingShopFront.factory('productData', function($http) {

  return $http.get('js/ProductList.json');

});