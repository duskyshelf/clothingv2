# clothingshop

![homepage](/readmeimages/homepage.png)

## How to build

All commands assume you are running this from terminal.

1. Clone this repo and open the containing folder 
  * `git clone https://github.com/duskyshelf/clothingshop.git` 
2. Make sure you have node and bower: `node -v` and `bower -v`  
3. Run `bower install`  
4. Run `npm install`  
5. Run `http-server`  
6. Visit: [http://localhost:8080/ ](http://localhost:8080/ )  

### Testing

Run the following commands from terminal to run the tests

##### Karma:  
1. karma start test/karma.conf.js

##### Protractor:  
1. webdriver-manager start  
2. http-server  
3. protractor test/protractor.conf.js  


### Discount codes

* fiveoff - £5 off all orders
* tenoff - £10 off baskets greater than £50
* 15off - £15 off orders containing footwear and over £75

### File structure

This was built using angular

File | Location
--- | ---
**Angular module** | public/js/app.js
**Controller** | public/js/shopFrontController.js
**Voucher Service** | public/js/voucherService.js
**Product List (JSON)** | public/js/ProductList.JSON
**Product Factory** | public/js/productFactory.js
