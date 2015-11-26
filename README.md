# Clothingshop

![homepage](/readmeimages/homepage.png)

## About Clothingshop

Heroku build: https://clothingshop.herokuapp.com/

(all notes about building, testing and file structure around this application can be found below)

#### Tools Used

Testing: Karma, Protractor  
Frameworks: Angular, Bootstrap

#### Comments about build

Clothing shop was built as an AngularJS single page application as I felt this was a simple setup that could meet all the features in the user stories.

This project was test driven using Karma for unit testing and then Protractor for feature testing.

I saved the product data as a local JSON file and called it through an Angular factory as I wanted to set the data up quickly, but with the option of moving it to an external API if required.

I initially built most of the logic in the controller and refactored the majority of the logic into 2 services, VoucherService and BasketService.

Styling was done using HTML/CSS and Bootstrap. I kept the styling very simple as I wanted to focus more on the testing and logic. Bootstrap was useful for making sure the site was responsive.

#### Voucher Code Comments

I store the voucher codes within a function which stores the codes, validations and discount in one place. I designed it this way so that it would be easy to remove/add and update any voucher codes and also check any criteria the voucher codes need to fulfill.

        var getVoucherList = function() {
          return {
            "fiveoff": { "validation": [ basketNonEmpty() ],
                         "discount": 5,
                         "message": "£5 Discount Applied" },
            "tenoff":  { "validation": [ basketNonEmpty(), basketAbove(50) ],
                         "discount": 10,
                         "message": "£10 Discount Applied" },
            "15off":   { "validation": [ basketNonEmpty(), basketAbove(75), 
                                         basketContains("Footwear") ],
                         "discount": 15,
                         "message": "£15 Discount Applied"}
          };
        };

#### Improvements

My styling is relatively simple, and whilst functional could be improved.

Adding a notification when a product is out of stock would have improved the UX.

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

##### Karma (Unit Tests):  
1. `karma start test/karma.conf.js`

##### Protractor (Feature Tests):
(these will require separate terminal windows)  
1. `webdriver-manager start`  
2. `http-server`  
3. `protractor test/protractor.conf.js`  


### Discount codes

* fiveoff - £5 off all orders
* tenoff - £10 off baskets greater than £50
* 15off - £15 off orders containing footwear and over £75

### File structure

This was built using AngularJS

**Public File** | **Location**
--- | ---
**Homepage** | public/index.html
**Angular module** | public/js/app.js
**Controller** | public/js/shopFrontController.js
**Voucher Service** | public/js/voucherService.js
**Basket Service** | public/js/basketService.js
**Product List (JSON)** | public/js/ProductList.JSON
**Product Factory** | public/js/productFactory.js
**Stylesheet** | public/css/stylesheet.css

**Test File** | **Location**
--- | ---
**Karma Config** | test/karma.conf.js
**Karna Controller Test File** | test/unit/shopController.spec.js
**Karma Factory Test File** | test/unit/shopController.spec.js
**Protractor Config** | test/protractor.conf.js
**Protractor Feature Tests** | test/e2e/ShopFeatureSpec.js

    ├── README.md
    ├── bower.json
    ├── package.json
    ├── public
    │   ├── css
    │   │   └── stylesheet.css
    │   ├── favicon.ico
    │   ├── images
    │   │   └── fashion.jpg
    │   ├── index.html
    │   └── js
    │       ├── ProductList.json
    │       ├── app.js
    │       ├── productFactory.js
    │       ├── shopFrontController.js
    │       ├── basketService.js
    │       └── voucherService.js
    ├── readmeimages
    │   └── homepage.png
    └── test
        ├── e2e
        │   └── ShopFeatureSpec.js
        ├── karma.conf.js
        ├── protractor.conf.js
        └── unit
            ├── productfactory.spec.js
            └── shopController.spec.js
