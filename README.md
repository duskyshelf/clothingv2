# clothingshop

![homepage](/readmeimages/homepage.png)

## How to build

All commands assume you are running this from terminal

clone this repo!  
open it up!  
make sure you have node and bower   
bower install  
npm install  
http-server  
http://localhost:8080/  

### Testing

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
